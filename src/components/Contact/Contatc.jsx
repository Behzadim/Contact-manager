import { PURPLE, CYAN, RED, ORANGE, CURRENTLINE } from "../../helpers/Colors"
const Contact = () => {
    return (
        <div className="col-md-6">
            <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
                <div className="card-body">
                    <div className="row d-flex align-items-center justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img
                                src="https//via.placeholder.com/200"
                                alt=""
                                style={{ border: `1px solid ${PURPLE}` }}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوادگی : {" "}
                                    <span className="fw-bold">
                                        یونس قربانی
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    شماره موبایل : {" "}
                                    <span className="fw-bold">
                                        09331133161
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    ادرس ایمیل : {" "}
                                    <span className="fw-bold">
                                        simpalyt7@gmail.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1 " style={{ backgroundColor: ORANGE }}>
                                <i className="fa fa-eye"></i>
                            </button>
                            <button className="btn my-1 " style={{ backgroundColor: CYAN }}>
                                <i className="fa fa-pen"></i>
                            </button>
                            <button className="btn my-1 " style={{ backgroundColor: RED }}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact