function House(title, image, address, caption, price, zestimate, caption2, mortgage){
    this.title = title;
    this.image = image;
    this.address = address;
    this.caption = caption;
    this.price = price;
    this.zestimate = zestimate;
    this.caption2 = caption2;
    this.mortgage = mortgage;
}

var houses = [];
houses.push(new House ("The Villa", "http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg", "4747 Northside Dr, Atlanta, GA 30327", "For Sale", "$2,999,000", "Zestimate®: $4,031,664", "A good deal!! (25% off!)", "Estimated Mortgage: $11,179/mo"));
houses.push(new House ("The Pool House", "http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg", "1101 Garmon Dr NW, tlanta, GA 30327", "For Sale", "$2,399,000", "Zestimate®: $2,684,662", "Average Deal", "Estimated Mortgage: $8,943/mo"));
houses.push(new House ("The Awesome", "http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510", "914 Davis Dr,Atlanta, GA 30327", "NOT for Sale", " ", "Zestimate®: $2,134,055", " ", " "));
houses.push(new House ("Versailles", "http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg", "5115 Northside Dr, Atlanta, GA 30327", "For Sale", "$8,000,000", "Zestimate®: $12,360,014", "A crazy deal!! (30% off!)", "Estimated Mortgage: $29,821/mo"));