class NewsPublisher{
    constructor(){
        this.subsubscribers = [];
    }

    subscribe(subscriber){
        this.subsubscribers.push(subscriber);
    }

    unsubscribe(subscriber){
        //returns an array that does not have the subscriber in it
        this.subsubscribers = this.subsubscribers.filter(s=>s !== subscriber);
    }

    notify(news){
        this.subsubscribers.forEach(s=>s(news));
    }
}

const newsReader = news => console.log(`Received news: ${news}`);
const publisher = new NewsPublisher();

publisher.subscribe(newsReader);
publisher.notify("Breaking news: Hopefuly this works on the first try!");

