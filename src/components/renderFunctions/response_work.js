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
                    }
                    console.log("leaders response");
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

