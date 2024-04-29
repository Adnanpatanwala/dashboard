import React from 'react'
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <Wrapper> 
        <div className="dashboard-container">
            <div className="header">
                <h3>Dashboard</h3>
                <button className='addadmin'>Add Admin</button>
            </div> 
        </div>
    </Wrapper>
  )
}

export default Dashboard;
const Wrapper = styled.div`
/* width: 100%; */
padding: 0px 20px;
.dashboard-container{
    .header{
        margin: 20px 0px; 
        display: flex;
        justify-content: space-between;
        margin-top: 50px; 
        position: relative;
         
        h3{
            font-size: 25px; 
        }
    }
}
.header::after{
    content: ""; 
    position: absolute;
    left: 0%;
    bottom: -30%;
    width: 100%;   
    border-bottom: 1px solid rgb(31 41 55);;
}
.addadmin{
    padding: 5px 10px;
    background-color: rgb(31 41 55);;
    color: white;
    border-radius: 5px;
    border: none;
}
`
