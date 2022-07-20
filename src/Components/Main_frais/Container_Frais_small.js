
function Container_Frais_small(props) {
    const {Title_frais,Money_day,Money_7days,Money_30days} = props
    return (
        <div className="Container_Frais_small">
            <h2>{Title_frais}</h2>
            <h3>Days : {Money_day} Dzd</h3>
            <h3>7_days : {Money_7days} Dzd</h3>
            <h3>last 30 days : {Money_30days} Dzd</h3>
            <div className="Graph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur sit saepe dignissimos qui velit fugit, fugiat maiores provident alias quasi perspiciatis a aperiam dolorum sed repudiandae laboriosam quae animi.
            </div>
            <button>money_last</button>
            <button>money_first</button>
        </div>
    )
}

export default Container_Frais_small
