export const VisibilityFilters = {
    ALL: "all",
    READS: "reads",
    PENDING: "pending"
};

export function getFilteredBookListAndCounts(
    BooksList,
    visibilityFilter
) {
    const readsList = BooksList.filter(item => item.read);
    const pendingList = BooksList.filter(item => !item.read);
    let filteredList = BooksList;

    if (visibilityFilter === VisibilityFilters.READS) {
        filteredList = readsList;
    } else if (visibilityFilter === VisibilityFilters.PENDING) {
        filteredList = pendingList;
    }
    return {
        allCount: BooksList.length,
        readsCount: readsList.length,
        pendingCount: pendingList.length,
        filteredList
    };
}
