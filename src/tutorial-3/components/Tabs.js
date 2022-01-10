import React from 'react';

function Tab({tab, active, handleClickLabel}) {
    
    let isActive = (active ? "active" : "");

    return (
    
    <div className={"tab " + isActive}>
        <input id="tab-one" type="checkbox" name="tabs" />
        <label onClick={() => handleClickLabel(tab.id)}
               for="tab-one">
            {tab.title}
        </label>
        <div className="tab-content">
            <p>
                {tab.description}
            </p>
        </div>
    </div>
    
    )
}

function Tabs() {

    const [activeId, setActiveId] = React.useState(1)

    const handleClickLabel = (id) => {
        setActiveId(id);
    }

    const tabs = [
        {
            id: 1,
            title: 'Сколько всего мест в доме?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!',
        },
        {
            id: 2,
            title: 'Самая дорогая квартира?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.',
        },
        {
            id: 3,
            title: 'Могу ли я отменить бронирование?',
            description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
        },
        {
            id: 4,
            title: 'Можно ли купить квартиру?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.',
        },
    ];

return (tabs.map((tab) => <Tab 
                            key={tab.id}
                            tab={tab}
                            active={tab.id === activeId}
                            handleClickLabel={handleClickLabel}/>))

}

export default Tabs;