import React from "react";
import AdminLayout from '../../components/admin/LayoutAdmin';
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import CreateBukper from "../../components/admin/CreateBukper";

const createbukper = () => {
    return (
        <LayoutAdmin>
            <CreateBukper/>
        </LayoutAdmin>
    )
}

export default createbukper;