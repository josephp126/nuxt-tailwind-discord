export default class MapperMap extends Map {
    map(func) {
        const arr = [];
        for(const item of this.values()) {
            arr.push(func(item));
        }
        return arr;
    }
}