import { useState } from "react";

const Header = ({setCategory}) => {

    const [selectCate, setSelectCate] = useState('cateAll');

    const clickBtn= (cateName) => {
        setSelectCate(cateName);
        setCategory(cateName);
    }

    return (
        <div className="Header">
            <h2>Movie List</h2>
            <div>
                <button
                    onClick={()=> clickBtn('cateAll')}
                    className={selectCate==='cateAll'?'active':''}
                >전체</button>
                <button onClick={()=> clickBtn(2020)}
                    className={selectCate===2020?'active':''}
                >2020</button>
                <button onClick={()=> clickBtn(2021)}
                    className={selectCate===2021?'active':''}
                >2021</button>
                <button onClick={()=> clickBtn(2022)}
                    className={selectCate===2022?'active':''}
                >2022</button>
                <button onClick={()=> clickBtn(2023)}
                    className={selectCate===2023?'active':''}
                >2023</button>
            </div>
        </div>
    );
};

export default Header;