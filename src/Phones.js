const DealPhones = document.getElementsByClassName("Deal-Phones")[0];

async function getPhones() {
    const res = await fetch("src/Phones.json");
    const data = await res.json();


    data.Phones.Samsung.forEach(element => {

        let modelValue = element.Model;
        let price = element.Price;
        let oldPriceValue = element.oldPrice;
        let save = element.oldPrice - element.Price;
        let Img = element.Img;

        const Phone = document.createElement("div");
        const PhoneImage = document.createElement("div");
        const Discount = document.createElement("div");
        const PhonePrice = document.createElement("div");

        const Percentage = document.createElement("p");
        const Off = document.createElement("p");

        const Model = document.createElement("p");
        const PriceWrap = document.createElement("p");
        const Save = document.createElement("p");

        const oldPrice = document.createElement("span");
        const Price = document.createElement("span");

        Percentage.textContent = "56%";
        Off.textContent = "OFF";

        Price.textContent = `₹${price}`;
        oldPrice.textContent = `₹${oldPriceValue}`;

        Model.textContent = modelValue;
        Save.textContent = `Save - ${save}`;

        Discount.append(Percentage, Off);
        PhoneImage.append(Discount);

        const img = document.createElement("img");
        img.src = Img;
        PhoneImage.append(img);

        PriceWrap.append(Price, oldPrice);
        PhonePrice.append(Model, PriceWrap, Save);

        Phone.append(PhoneImage, PhonePrice);
        DealPhones.appendChild(Phone);

        Phone.classList.add("Phone");
        PhoneImage.classList.add("Phone-Image");
        Discount.classList.add("Discount");
        PhonePrice.classList.add("Phone-Price");
        oldPrice.classList.add("Old-Price");
        Save.classList.add("Save");

        console.log(data);
        console.log(DealPhones);
    });
}


getPhones()