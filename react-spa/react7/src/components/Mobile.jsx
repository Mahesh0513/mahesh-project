let Mobile=()=>{

    let mname="oppo";
    let mprice=20000;
    let mcode=101;
    let MobileImage="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/03/19/of19pp-cvs-sel-1-963871-1616158356.jpg?itok=Z-qY09v_"

    return <div>
        <h1>Mobile data</h1>
        <hr />
        <h2>Mobile Name:{mname}</h2>
        <h3>Mobile price:{mprice}</h3>
        <h4>Mobile code:{mcode}</h4>
        
        <img src={MobileImage} alt="" />
    </div>

}

export default Mobile