import Dashboard from "../components/Dashboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import IncomeList from "../components/IncomeList.jsx";
import Modal from "../components/Modal.jsx";
import { Plus } from "lucide-react";
import AddIncomeForm from "../components/AddIncomeForm.jsx";
import DeleteAlert from "../components/DeleteAlert.jsx";
import IncomeOverview from "../components/IncomeOverview.jsx";

const Income = () => {
    useUser();

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    // Fetch income details from the API
    const fetchIncomeDetails = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_INCOMES);
            if (response.status === 200) {
                setIncomeData(response.data);
            }
        } catch (err) {
            console.error(`Failed to fetch income details: `, err);
            toast.error(err.response?.data?.message || "Failed to fetch income details.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch categories for income
    const fetchIncomeCategories = async () => {
        try {
            const response = await axiosConfig.get(
                API_ENDPOINTS.CATEGORY_BY_TYPE("income")
            );
            if (response.status === 200) {
                console.log("income categories", response.data);
                setCategories(response.data);
            }
        } catch (error) {
            console.error(`Failed to fetch income categories:`, error);
            toast.error(error.response?.data?.message || "Failed to fetch income categories");
        }
    };

    //save the income details
    const handleAddIncome = async (income) => {
        const {name,amount,date,icon,categoryId}=income;

        if(!name.trim()){
            toast.error("Please enter name");
            return;
        }

        if(!amount || isNaN(amount)||Number(amount)<=0){
            toast.error("Please enter amount greater than 0");
            return;
        }

        if(!date ){
            toast.error("Please enter date");
            return;
        }

        const today=new Date().toISOString().split('T')[0];
        if(date>today){
            toast.error(`Date cannot be in future`);
            return;
        }

        if(!categoryId){
            toast.error("Please select valid category");
            return;
        }

        try{
            const response=await axiosConfig.post(API_ENDPOINTS.ADD_INCOME,{
                name,amount:Number(amount),date,icon,categoryId
            })
            if(response.status===201){
                setOpenAddIncomeModal(false);
                toast.success("Income added successfully.");
                fetchIncomeDetails();
                fetchIncomeCategories()
            }
        }catch(err){
            console.log(`Error adding income`,err);
            toast.error(err.response?.data?.message || "Failed to add income details.");
        }
    }

    //Delet income details
    const deleteIncome = async (id) => {
        try{
            await axiosConfig.delete(API_ENDPOINTS.DELETE_INCOME(id));
            setOpenDeleteAlert({show: false, data: null});
            toast.success("Income deleted successfully.");
            fetchIncomeDetails();
        }catch(err){
            console.log(`Error deleting income`,err);
            toast.error(err.response?.data?.message || "Failed to delete income details.");
        }
    }

    const handleDownloadIncomeDetail = async () => {
        try{
            const response= await axiosConfig.get(API_ENDPOINTS.INCOME_EXCEL_DOWNLOAD,{responseType:"blob"});
            let filename="income_details.xlsx";
            const url=window.URL.createObjectURL(new Blob([response.data]));
            const link=document.createElement("a");
            link.href=url;
            link.setAttribute("download",filename);
            document.body.appendChild(link);
            link.click();
            link.parentElement.removeChild(link);
            window.URL.revokeObjectURL(url);
            toast.success("Income downloaded successfully.");
        }catch(err) {
            console.log(`Error in downloading income details`, err);
            toast.success(err.response?.data?.message || "Failed to download income details.");
        }
    }

    const handleEmailIncomeDetail = async () => {

        try{
            const response= await axiosConfig.get(API_ENDPOINTS.EMAIL_INCOME);
            if(response.status===200 || response.status===201){
                toast.success("Income email added successfully.");
            }
        }catch(err){
            console.error(`Email emailing income details`,err);
            toast.error(err.response?.data?.message || "Failed to download income details.");
        }
    }

    useEffect(() => {
        fetchIncomeDetails();
        fetchIncomeCategories();
    }, []);

    return (
        <Dashboard activeMenu="Income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        {/* Overview for income with line chart */}

                        <IncomeOverview transactions={incomeData} onAddIncome={()=>setOpenAddIncomeModal(true)} />
                    </div>

                    <IncomeList
                        transactions={incomeData}
                        onDelete={(id) =>setOpenDeleteAlert({show: true, data: id})}
                        onDownload={handleDownloadIncomeDetail}
                        onEmail={handleEmailIncomeDetail}
                    />

                    {/* Add Income Modal */}
                    <Modal
                        isOpen={openAddIncomeModal}
                        onClose={() => setOpenAddIncomeModal(false)}
                        title="Add Income"
                    >
                        <AddIncomeForm
                            onAddIncome={(income)=>handleAddIncome(income)}
                            categories={categories}
                        />
                    </Modal>

                    {/*Deleting the modal*/}
                    <Modal
                        isOpen={openDeleteAlert.show}
                        onClose={()=>setOpenDeleteAlert({show:false,data:null})}
                        title="Delete income"
                    >
                        <DeleteAlert
                            content="Are you sure you want to delete income details?"
                            onDelete={()=>deleteIncome(openDeleteAlert.data)}
                        />
                    </Modal>
                </div>
            </div>
        </Dashboard>
    );
};

export default Income;