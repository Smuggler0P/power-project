frappe.ui.form.on('Power Document', {
    before_save: function (frm) {
        if (!frm.doc.date_and_time) {
            frm.set_value('date_and_time', frappe.datetime.now_datetime());
        }
        if (frm.doc.document_type) {
            // Add the document type as a tag

            frappe.call({
                method: "frappe.desk.doctype.tag.tag.add_tag",
                args: {
                    dt: frm.doc.doctype,
                    dn: frm.doc.name,
                    tag: frm.doc.document_type
                },
            });

        }
    }
});