import react from "react";
import './index.css';
import MaterialTable from "material-table";

const Courses = () => {

    const studentData = [
        {
            Stu_Id: 1001,
            Name : "Monica Geller",
            addedcourse: "MBA"
        },
    
        {
            Stu_Id: 2001,
            Name : "Ross Geller",
            addedcourse: "MCA"
        },
    
        {
            Stu_Id: 3001,
            Name : "Joey Tribbiani",
            addedcourse: "BBA"
        },
    
        {
            Stu_Id: 4001,
            Name : "Chandler Bing",
            addedcourse: "BCA"
        },
    
        {
            Stu_Id: 5001,
            Name : "Phobe Buffey",
            addedcourse: "Mass Communication"
        },
    
        {
            Stu_Id: 6001,
            Name : "Rachel Green",
            addedcourse: "BA"
        },
        {
            Stu_Id: 7001,
            Name : "Mike Hannigan",
            addedcourse: "BA"
        },
        {
            Stu_Id: 8001,
            Name : "Carol Geller",
            addedcourse: "BCOM"
        },
        {
            Stu_Id: 9001,
            Name : "Gunther Hawkins",
            addedcourse: "Social Studies"
        },
        {
            Stu_Id: 1201,
            Name : "Janice Tonkin",
            addedcourse: "Computer Science"
        },
    ]

   const columns =[
       {
           title:'ID', field : 'Stu_Id'
       },
       {
            title:'Full Name', field : 'Name'
       },
       {
            title:'Course', field : 'addedcourse',
            
       }
   ]

    return(
        <>
            

            <div className ="myTable"> 
               <MaterialTable title="Student list"
               data ={studentData}
               columns = {columns} 
               options = {{
                    filtering : false,
                    exportButton : true
               }}
               />
                    
            </div>
            
        </>
    )
}

export default Courses;