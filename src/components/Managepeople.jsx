import React from "react";
import Adminnav from "./Adminnav";
import Sidebar from "./Sidebar";

function ManagePeople() {
    return (
        <div class="main">

            <Sidebar />
            <div class="managehome">
                <Adminnav />
                <div class="managepeople">

                    <h1 class="title"> Manage People</h1>
                    <table class="managetable">
                        <thead>
                            <tr>
                                <th> SN </th>
                                <th> Title  </th>
                                <th> Action </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1 </td>
                                <td> First Post</td>
                                <td> <a href="#" class="edit">Edit</a></td>
                                <td> <a href="#" class="delete">Delete</a></td>


                            </tr>
                            <tr>
                                <td> 2</td>
                                <td> Second post</td>
                                <td> <a href="#" class="edit">Edit</a></td>
                                <td> <a href="#" class="delete">Delete</a></td>
                            </tr>


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}



export default ManagePeople;