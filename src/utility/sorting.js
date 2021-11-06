const sortItem = (items, sortingType) => {
    if (sortingType === "des") {
        return items.sort((a, b) => b.id - a.id);
    } else {
        return items.sort((a, b) => a.id - b.id);
    }
}

export default sortItem;