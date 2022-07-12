import React from 'react';
import { Link } from "react-router-dom";

function RoomHomePage(props) {
    const isLogin = props.isLogin;

    return (
        <div>
            <h1>RoomHomePage입니다.</h1>
            <div className="RoomPageContainer">
            <div>
                <ul>
                    <li>
                        <Link to="/mkroom">
                            <button>
                            방 만들기
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/enterbycode">
                            <button>
                            코드로 새로운 방 참여하기
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/enter">
                            <button>
                            방 들어가기
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default RoomHomePage;