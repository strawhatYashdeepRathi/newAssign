const products = [
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660410/myntra/photo-1644263701567-cfbff8604f11_koemhi.jpg",
        title: "Solid Black T-shirt",
        type: "T-shirt",
        Price : "1200",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660407/myntra/photo-1644263701566-f99003bcba2d_cjxe0i.jpg",
        title: "Printed Sweatshirt",
        type: "Sweatshirt",
        Price : "2400",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660406/myntra/photo-1644216527697-5e65f8915d76_tr3mfq.jpg",
        title: "Channel Handbag",
        type: "Handbag",
        Price : "48000",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660405/myntra/photo-1644130021180-49c4ef2cbf96_acpp21.jpg",
        title: "Apple watch S3",
        type: "Watch",
        Price : "19000",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660404/myntra/photo-1643797519086-cc9a821fbcfe_znnqus.jpg",
        title: "Marco Serussi perfume",
        type: "Perfume",
        Price : "12000",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660403/myntra/photo-1643616972655-649ca48b0a02_fkc0bp.jpg",
        title: "Channel Perfume",
        type: "Perfume",
        Price : "23000",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660402/myntra/photo-1643488671799-316650959950_jnuasz.jpg",
        title: "Apple Watch S4",
        type: "Watch",
        Price : "26000",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660400/myntra/photo-1642867471627-634f75fdefaa_bcobpw.jpg",
        title: "Nike Air Jordan Olive Green",
        type: "Shoes",
        Price : "15600",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660398/myntra/photo-1642757300992-63adf6e55421_xfgdcz.jpg",
        title: "Fasttrack Glasses",
        type: "Sunglasses",
        Price : "5700",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660397/myntra/photo-1642443919368-586139cd2d07_ijntqr.jpg",
        title: "DW Watch",
        type: "Watch",
        Price : "13500",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660330/myntra/photo-1642363364092-4a6ae62ce9e1_llnbk2.jpg",
        title: "Vans Black Authentic",
        type: "Shoes",
        Price : "7200",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660326/myntra/photo-1643581278958-413530f40933_uaqfmj.jpg",
        title: "White Vans",
        type: "Shoes",
        Price : "3800",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660322/myntra/photo-1642980364256-12e2811c91ae_olppcx.jpg",
        title: "Gray Air Jordans",
        type: "TShoes",
        Price : "12500",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660319/myntra/photo-1641248775395-2b938a7c099a_pxffxm.jpg",
        title: "Black Eau-de-toilette",
        type: "Perfume",
        Price : "14500",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660309/myntra/photo-1639926784590-ff2ef4757bf3_pkhvrx.jpg",
        title: "Black Superdry Bomber Jacket",
        type: "Jacket",
        Price : "8799",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660306/myntra/photo-1639752567895-656101fd55c3_mrbdwx.jpg",
        title: "White Superdry bodysuit",
        type: "Track-suit",
        Price : "9599",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660303/myntra/photo-1640786172851-9e9e5ba58a37_ywydim.jpg",
        title: "Solid Black T-shirt",
        type: "T-shirt",
        Price : "1200",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660303/myntra/photo-1640786172851-9e9e5ba58a37_ywydim.jpg",
        title: "Apple Watch S4 pro",
        type: "Watch",
        Price : "28999",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660291/myntra/photo-1644123545969-1d3d2ae14a02_qz0yuk.jpg",
        title: "Womens Black Boots",
        type: "Shoes",
        Price : "5599",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660288/myntra/photo-1639062532911-5a6e9591d21c_bvmyd9.jpg",
        title: "Nike Blue Air Jordans-2",
        type: "Shoes",
        Price : "17999",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660280/myntra/photo-1637962032623-a692b4bd4a84_yswry6.jpg",
        title: "Nike Airforce",
        type: "Shoes",
        Price : "8499",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660267/myntra/photo-1634283715079-d91bbed0ece0_gjycyc.jpg",
        title: "Soho premium sock",
        type: "Socks",
        Price : "3999",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660258/myntra/photo-1624105809959-8c4826758dc9_ikyrd9.jpg",
        title: "Tommy Watch",
        type: "Watch",
        Price : "6599",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660248/myntra/photo-1623303179820-de8ec58b03dc_lyxyut.jpg",
        title: "Earings",
        type: "Earings",
        Price : "899",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660244/myntra/photo-1596221168861-5fc89ac18431_leocf1.jpg",
        title: "TAHNYC moisturizer",
        type: "Moisturizer",
        Price : "4599",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660240/myntra/photo-1595909236612-9fd30b476365_rp1aug.jpg",
        title: "Orange Air Jordans-2",
        type: "Shoes",
        Price : "17999",
    },
    {
        url: "https://res.cloudinary.com/yashinstaclone/image/upload/v1644660235/myntra/photo-1586179405184-1158419ffe2c_lkjugh.jpg",
        title: "Victoria Secret Velnet Petals",
        type: "Sunscreen",
        Price : "2799",
    }
];

module.exports = products