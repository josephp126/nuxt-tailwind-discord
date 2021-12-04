export default class MapperMap extends Map {
    map(func) {
        const arr = [];
        for(const item of this.values()) {
            arr.push(func(item));
        }
        return arr;
    }
    
    filter(fn, thisArg) {
		if (typeof thisArg !== 'undefined') fn = fn.bind(thisArg);
		const results = new this.constructor[Symbol.species]();
		for (const [key, val] of this) {
			if (fn(val, key, this)) results.set(key, val);
		}
		return results;
	}
}