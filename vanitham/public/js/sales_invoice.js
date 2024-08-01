
frappe.ui.form.on("Sales Invoice", {
    cost_center:function(frm){
        frm.doc.items.forEach(e => {
           frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
           frm.refresh_field('items');
        });
        frm.doc.taxes.forEach(e => {
            frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
            frm.refresh_field('taxes');
         });
    },
    taxes_and_charges:frm=>{
        frm.doc.taxes.forEach(e => {
            frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
            frm.refresh_field('taxes');
        });
    },
    validate:frm=>{
        frm.doc.items.forEach(e => {
            frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
            frm.refresh_field('items');
         });
         frm.doc.taxes.forEach(e => {
             frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
             frm.refresh_field('taxes');
          });
    }
});

frappe.ui.form.on("Sales Invoice Item", {
    items_add:(frm,cdt,cdn)=>{
        let d = locals[cdt][cdn]
        d.cost_center = frm.doc.cost_center
        frappe.model.set_value(cdt, cdn, 'cost_center', frm.doc.cost_center)
        frm.refresh_field('items');
    },
})

frappe.ui.form.on("Sales Taxes and Charges", {
    taxes_add:(frm,cdt,cdn)=>{
        let d = locals[cdt][cdn]
        d.cost_center = frm.doc.cost_center
        console.log(d.cost_center)
        frappe.model.set_value(cdt, cdn, 'cost_center', frm.doc.cost_center)
        frm.refresh_field('taxes');
    },
})