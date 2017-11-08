import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;

    },
    data () {
        return {
            activityimport: "Workorder Messages / Import a File",
            title: "Import a File - Sprout",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomercreate",
                discardbtnlink: "#/app/sales/salescustomeredit",
                importbtnlink: "#/app/sales/salesnextactivityimport",
                cancelbtnlink:"/manufacturing_order"
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}