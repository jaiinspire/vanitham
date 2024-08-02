
frappe.ui.form.on("Sales Order", {
    cost_center:function(frm){
        frm.doc.taxes.forEach(e => {
            frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
            frm.refresh_field('taxes');
         });
    },
    taxes_and_charges:frm=>{
        if (frm.doc.taxes_and_charges){
            frm.doc.taxes.forEach(e => {
                frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
                frm.refresh_field('taxes');
            });
        }
    },
    validate:frm=>{
        frm.doc.taxes.forEach(e => {
            frappe.model.set_value(e.doctype, e.name, 'cost_center', frm.doc.cost_center) 
            frm.refresh_field('taxes');
        });
    }
});

frappe.ui.form.on("Sales Taxes and Charges", {
    add:(frm,cdt,cdn)=>{
        let d = locals[cdt][cdn]
        d.cost_center = frm.doc.cost_center
        console.log(d.cost_center)
        frappe.model.set_value(cdt, cdn, 'cost_center', frm.doc.cost_center)
        frm.refresh_field('taxes');
    },
})