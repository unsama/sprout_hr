import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        var self = this;
        self.select();
        self.btnlinks.discardbtnlink = "/attendance/Hr/"+self.$route.params.id;
        $(function () {
            $("select#o_field_input_611 option").each(function(){
                if($(this).val()==self.gender){
                    $(this).attr("selected","selected");
                }
            });
            $("select#o_field_input_612 option").each(function(){
                if($(this).val()==self.maritalStatus){
                    $(this).attr("selected","selected");
                }
            });
            // $("#saveclose").click(function () {
            //     alert("saveclose");
            //     self.updateDepart();
            // });

            // $("#save").click(function () {
            //     alert("save button is  called!!! ")
            //     self.submit();
            //     self.btnlinks.discardbtnlink = "/Employees/HrDeps/"+self.$route.params.id;
            // });
            $("#save").click(function () {
                alert("button is working!!!")
                var r = confirm("Are you sure you want to  Edit the employee ");
                if (r)
                {
                    self.submit();
                    window.location.href = "/attendance/Hr/"+self.$route.params.id;
                }
            });

            self.$watch('managerId', function (val) {
                self.managers.forEach(function (row) {
                    if (row.employeename === val) {
                        self.managerId = row.id;
                    }
                });
            });

            $(".deptdropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $(".jobTitledropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg3").modal('show');
                }
            });
            $(".bankAccDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg62").modal('show');
                }
            });
            $(".mgrDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $(".coachDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $(".workingAddressDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg6").modal('show');
                }
            });
            $(".homeAddressDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg6").modal('show');
                }
            });
            $(".relatedUserDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg5").modal('show');
                }
            });
            $(".accDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg10").modal('show');
                }
            });
            $(".workingTimeDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg100").modal('show');
                }
            });



            $('#datepicker6').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            $('#datepicker7').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker6').datepicker('getFormattedDate');
                self.dates_value6 = value;
                var value1 = $('#datepicker7').datepicker('getFormattedDate');
                self.dates_value7 = value1;

            };


        });
    },
    data() {
        return {
            managers1:'',
            managerId1:'',
            departnents1:'',
            departmentId1:'',
            departName: '',
            dates_value6:'', //birthDate
            dates_value7:'',//mediacalExamDate
            employeeName: '',
            workingAddresses: '',
            workingAddressId: '',
            departnents: '',
            departmentId: '',
            jobTitles: '',
            jobtitleId: '',
            managers: '',
            managerId: '',
            coachs: '',
            coachId: '',
            workingTimes: '',
            workingTimeId: '',
            workMobile: '',
            workLocation: '',
            workEmail: '',
            workPhone: '',
            identificationNo: '',
            passportNo: '',
            countries: '',
            countryId: '',
            BankAccountNumbers: '',
            BankAccountNumbersId: '',
            homeAddresses: '',
            homeAddressId: '',
            gender: '',
            maritalStatus: '',
            noOfChildren: '',
            birthDate: '',
            placeOfBirth: '',
            timeSheetCost: '',

            accounts: '',
            accountId: '',
            companies: '',
            companyId: '',
            relatedUsers: '',
            relatedUserId: '',
            badgeId: '',
            pin: '',
            manualAttendance: '',
            medicalExamDate: '',
            companyVehicle: '',
            HomeDistance: '',
            nextactivity: "Next ActivitiesNeed / to customize the solution",
            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal12: "Warning",
            modal50: "Open:Manager",
            modal60: "Open:Manager",
            modal61: "Open:Manager",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                savebtnlink: "",
                discardbtnlink: "",
                importbtnlink: "#/app/imported"
            },

            tableheader: [
                " Name",
                " Day of Week",
                " Work from",
                " Work to",
                " Starting Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "Developer",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",



            ],
            tableheader2: [
                " Reason",
                " Resource",
                " Working Time",
                " Start Date",
                " End Date",


            ],
            tabledata2: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter2:[
                "",
                "",
                "",
                "",
                "",
                "",



            ],
        }
    },

    methods: {

        editEmployee: function(){
            var self = this;
            self.$http.post("/recruitment/editEmployee",{


            });
        },

        updateDepart: function () {
            var self = this;
            self.$http.post("/recruitment/addNewDepartment", {
                "departName": self.departName,"parentDeptId":self.parentDeptId, "managerId":self.managerId
            }).then(function(res){
                //console.log(res.body);
            },function(err){

            });

        },


        SelectContactInfo: function () {
            var value = $(this).val();
            console(value);
            if (!(value == "Create and Edit..." || value == "Search More..." || value=="undefined")) {


                var self = this;
                self.$http.post("/recruitment/fetchContactInformationOfEmployee", {
                    "workingAddressId": self.workingAddressId,
                }).then(function (res) {
                    var contactInfo = res.body.data[0];
                    self.workMobile = contactInfo.work_mobile;
                    //self.workLocation = contactInfo.name;
                    self.workEmail = contactInfo.work_email;
                    self.workPhone = contactInfo.work_phone;

                }, function (err) {
                    // alert(err);
                });

            }
        },

        selectDepartManagerHussain: function () {
            var value = $(this).val();
            var self = this;
            if (value == "Create and Edit..." || value == "Search More..." ) {

                //alert("Inside Method selectDepartManagerHussain(): departmentId  =  "+ self.departmentId);
                self.$http.post("/recruitment/fetchDeptManager", {
                    "departmentId": self.departmentId,

                }).then(function (res) {
                    var deptManager = res.body.result[0];

                    console.log(deptManager);
                    self.managerId = deptManager.employeename;
                    console.log(self.managerId);

                }, function (err) {
                    alert(err);
                });
            }

        },


        select: function () {
            var self = this;


            self.$http.post("/recruitment/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                //console.log("date"+parentdata.date_of_birth);
                // self.parentdata.forEach(function (lop) {
                //     var date = new Date(lop.date_of_birth);
                //     var new_date = date.getMonth()+'/'+date.getDate()+'/'+date.getYear();
                //     self.birthDate.push(new_date);
                //     // console.log(self.validity_start_loop);
                //
                //     var date1 = new Date(lop.validity_end);
                //     var new_date1 = date1.getMonth()+'/'+date1.getDate()+'/'+date1.getYear();
                //     self.validity_end_loop.push(new_date1);
                //
                // });

                self.employeeName = parentdata.employeename;
                self.workingAddressId = parentdata.work_address_id;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.department_id;
                self.jobtitleId = parentdata.job_tittle;
                self.managerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.BankAccountNumbersId = parentdata.employee_bank_account_id;
                //self.workPermitNo = parentdata.work_permit_no;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddressId = parentdata.home_address_id;
                self.birthDate = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountId = parentdata.account_id;
                self.medicalExamDate = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.HomeDistance = parentdata.home_work_distance;
                self.relatedUserId = parentdata.related_user_id;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.manualAttendance = parentdata.manual_attandance.data[0];


                self.$http.post("/recruitment/selectworkaddress", {"id":self.workingAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/recruitment/selectjobtitles", {"id":self.jobtitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/recruitment/selectmanager", {"id":self.managerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/recruitment/selectbankaccountNo", {"id":self.BankAccountNumbersId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
                                                            var workSchedule = res.body.data[0];
                                                            self.relatedUser = workSchedule.username;
                                                            console.log(workSchedule.username );

                                                        }, function (err) {

                                                        });


                                                    }, function (err) {

                                                    });
                                                }, function (err) {

                                                });
                                            }, function (err) {

                                            });
                                        }, function (err) {

                                        });
                                    }, function (err) {

                                    });
                                }, function (err) {

                                });
                            }, function (err) {

                            });
                        }, function (err) {

                        });

                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });

            self.$http.post("/recruitment/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.data;
            }, function (err) {
                //alert(err);
            });

            // self.$http.post("/employees /fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
            //     self.names = res.body.data;
            //
            //     alert(self.names);
            // },function(err){
            //     // alert(err);
            // });

            self.$http.post("/recruitment/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
            self.$http.post("/recruitment/fetchDepartments1", {"deptName": self.name}).then(function (res) {
                self.departnents1 = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/recruitment/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/recruitment/fetchManagers", {"managerName": self.employeename}).then(function (res) {
                self.managers = res.body.result;
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/recruitment/fetchManagers1", {"managerName": self.employeename}).then(function (res) {
                self.managers1 = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCoachs", {"coach_name": self.employeename}).then(function (res) {
                self.coachs = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/recruitment/fetchWorkingTimeNames", {"workingTime": self.name}).then(function (res) {
                self.workingScedules = res.body.result;
            }, function (err) {
                // alert(err);
            });

            // self.$http.post("/recruitment/fetchmanager", {"manager_name": self.employeename	}).then(function(res){self.emp_table =res.body.result;},function(err){
            //     //alert(err);
            // });


            self.$http.post("/employees/fetchHomeAddresses", {"HomeAddress": self.name}).then(function (res) {
                self.homeAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/FetchBankAccountNumbers", {"AccNo": self.account_number}).then(function (res) {
                self.BankAccountNumbers = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCountries", {"countryName": self.country}).then(function (res) {
                self.countries = res.body.result;
            }, function (err) {
                //alert(err);
            });
            //acoountTable
            self.$http.post("/recruitment/fetchAccounts", {"accName": self.name}).then(function (res) {
                self.accounts = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCompanies", {"companyName": self.company_name}).then(function (res) {
                self.companies = res.body.result;
            }, function (err) {
            });

            self.$http.post("/recruitment/fetchRelatedUsers", {"relatedUser": self.username}).then(function (res) {
                self.relatedUsers = res.body.result;
            }, function (err) {
                //alert(err);
            });


        },
        submit: function () {
            alert("m here jst inside the submit() body.");
            var self = this;
            alert("workingAddressId =  "+self.workingAddressId);
            alert("bith date =  "+self.dates_value6);
            alert("medical exam date =  "+self.dates_value7);
            // alert("contractType_id =   "+self.contractType_id);
            // alert("trial_period_duration_from =    "+self.dates_value1);
            // alert("trial_period_duration_to =    "+self.dates_value2);
            // alert("duration_from =    "+self.dates_value3);
            // alert("duration_from =    "+self.dates_value4);
            // alert("work_schedule_id =    "+self.work_schedule_id);
            // alert("jobTitle =    "+self.job);
            //alert("department id =    "+self.abc);

            self.$http.post("/recruitment/EditEmployee", {
                "id": self.$route.params.id,
                "employeeName": self.employeeName,
                "workingAddressId": self.workingAddressId,
                "workMobile": self.workMobile,//job_title
                "workLocation": self.workLocation,// department name
                "workEmail": self.workEmail,
                "workPhone": self.workPhone,
                "departmentId": self.departmentId,
                "jobtitleId": self.jobtitleId,
                "managerId": self.managerId,
                "coachId": self.coachId,
                "workingTimeId": self.workingTimeId,
                "countryId": self.countryId,
                "identificationNo": self.identificationNo,
                "passportNo": self.passportNo,
                "BankAccountNumbersId": self.BankAccountNumbersId,
                "homeAddressId": self.homeAddressId,
                "accountId": self.accountId,
                "gender": self.gender,
                "maritalStatus": self.maritalStatus,
                "relatedUserId": self.relatedUserId,
                "pin": self.pin,
                "badgeId": self.badgeId,
                "manualAttendance": self.manualAttendance,
                "dates_value7": self.dates_value7,
                "companyVehicle": self.companyVehicle,
                "HomeDistance": self.HomeDistance,
                "noOfChildren": self.noOfChildren,
                "dates_value6": self.dates_value6,
                "placeOfBirth": self.placeOfBirth,
                "timeSheetCost": self.timeSheetCost,


            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });
            // alert("trial_period_duration_from = "+self.trial_period_duration_from);
            alert("This is the last statement in submit() function body!!!");


            self.$http.post("/recruitment/addemp", {
                "dep_name": self.name, "p_dep_id": self.parent_dept_id, "mgr_id": self.identification_number
            }).then(function (res) {
                //console.log(res.body);
            }, function (err) {
                //alert(err);
            });


        },
    },


    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Tableview,
        Editing,

        dashconterller: DashboardController,
        Modal,


    }
}
// import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// import Tabs from "./../../partials/Tabs/Tabs.vue"
// import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
// import Componame from "./../../partials/Componame/Componame.vue"
// import Tableview from "./../../partials/Tableview/Tableview.vue"
// import Editing from "./../../partials/Editing/Editing.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Message from "./../../partials/Message/Message.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
//
//
// export default{
//     created: function () {
//         $(document).ready(function() {
//             $('.dateRangePicker')
//                 .datepicker({
//                     format: 'mm/dd/yyyy',
//                     startDate: '01/01/2010',
//                     endDate: '12/30/2020'
//                 })
//         });
//
//         $(document).ready(function() {
//             $('.dateRangePicker1')
//                 .datepicker({
//                     format: 'mm/dd/yyyy ',
//                     startDate: '01/01/2010',
//                     endDate: '12/30/2020'
//                 });
//             $('.datetimepicker1').datetimepicker();
//         });
//
//         $('#openBtn').click(function(){
//             $('#myModal').modal({show:true})
//         });
//
//
//     },
//     data(){
//         return{
//
//             nextactivity: "Employees/Enrique Jones",
//             btnlinks: {
//                 createbtnlink: "#/app/sales/salescustomeredit",
//                 discardbtnlink: "#/app/attendance/AttHr",
//                 importbtnlink: "#/app/imported",
//                 editbtnlink:""
//             },
//         }
//     },
//     components: {
//         Emptyform,
//         Tabs,
//         ModelDescription,
//         Componame,
//         Tableview,
//         Editing,
//         Message,
//         Request_quotation_lower,
//         dashconterller: DashboardController
//
//
//     }
// }