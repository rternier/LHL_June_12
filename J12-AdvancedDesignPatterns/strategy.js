class QuickSort{
    sort(data){
        console.log("doing a quicksort");
    }
}

class MergeSort{
    sort(data){
        console.log("doing a Merge Sort");
    }
}

class SortedList{
    constructor(sortStrategy){
        this.setSortingStrategy = sortStrategy;
    }
    setSortingStrategy(strategy){
        this.setSortingStrategy = strategy;
    }
    sort(data)
    {
        this.setSortingStrategy.sort(data);
    }
}

const sortedList = new SortedList(new QuickSort());
sortedList.sort([1,5,6,2,3]);

const sl = new SortedList(new MergeSort());
sl.sort([1,5,6,2,3]);



