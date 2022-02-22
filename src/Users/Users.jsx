const Users=()=>{

    return(
        <div  className="content">
                <h2 className="mt-3 text-center">لیست کاربران</h2>
                <div className="row   text-center">


                    <div className="mt-5  d-flex justify-content-md-start justify-content-sm-center col-md-6 col-xl-8 col-sm-2">
                        <button className="btn btn-new-user me-4 ">+</button>
                    </div>
                    <div className="col-md-6  mt-5 col-xl-4 col-sm-10">
                        <input placeholder="جستجو" className="input-search text-center form-control" type={'text'} />

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table  mt-4 text-center table-success table-striped">
                            <tr>
                                <th>نام</th>
                                <th>ایمیل</th>
                                <th>نام کاربری</th>
                                <th>عملیات</th>
                            </tr>

                            <tr>
                                <td>mohammad</td>
                                <td>mohammad@gmail.com</td>
                                <td>mohammad8356</td>
                                <td>

                                    <i className="fa td-i fa-trash text-danger"></i>
                                    <i className="fa  td-i  fa-edit text-warning"></i>

                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
    )
}
export default Users;