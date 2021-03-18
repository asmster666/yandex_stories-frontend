import response from '../../../response.json';

const ResponseWork = (type, object) => {
    response.forEach(element => {
        if(type === element.alias) {
            switch (type) {
                case "vote":
                    object = {
                        title: element.data.title,
                        subtitle: element.data.subtitle,
                        emoji: element.data.emoji,
                        users: [element.data.users]
                    };
                    console.log("vote response");
                    break;
                case "leaders":
                    object = {
                        title: element.data.title,
                        subtitle: element.data.subtitle,
                        emoji: element.data.emoji,
                        users: [element.data.users]
                    };
                    console.log("leaders response");
                    break;
                case "chart":
                    object = {
                        title: element.data.title,
                        subtitle: element.data.subtitle,
                        emoji: element.data.emoji,
                        values: [element.data.values],
                        users: [element.data.users]
                    };
                    console.log("chart response");
                    break;
                case "vote_result": 
                    console.log("vote results response");
                    break;
                case "diagram":
                    object = {
                        title: element.data.title,
                        subtitle: element.data.subtitle,
                        totalText: element.data.totalText,
                        differenceText: element.data.differenceText,
                        categories: [element.data.categories]
                    };
                    console.log("diagram response");
                    break;
                case "activity":
                    object = {
                        title: element.data.title,
                        subtitle: element.data.subtitle,
                        data: [element.data.data]
                    }
                    console.log("activity response");
                    break;
                default:
                    console.log("data not found");
                    break;
            }
        }
    });

    return object;
}

export default ResponseWork;

