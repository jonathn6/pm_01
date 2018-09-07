import React from 'react';
import '../styles/app.css';

function validateDollar(value) {
    var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    if (regex.test(value))
    {
        //Input is valid, check the number of decimal places
        var twoDecimalPlaces = /\.\d{2}$/g;
        var oneDecimalPlace = /\.\d{1}$/g;
        var noDecimalPlacesWithDecimal = /\.\d{0}$/g;
  
        if(value.match(twoDecimalPlaces))
        {
            //all good, return as is
            return value;
        } 
        else 
        {
          if(value.match(noDecimalPlacesWithDecimal))
          {
              //add two decimal places
              return value + "00";
          }
          else
          {
            if(value.match(oneDecimalPlace ))
            {
                //ad one decimal place
                return value + "0";
            }
            else
            {
            //else there is no decimal places and no decimal
            return value + ".00";               
            }           
          }
        }
    }
    else
    {
      return -1;
    }
  }

class enterproperty extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
        numberUnits: 0,
        notes: '',
        saveStatus: '0',
        blocklotcss: 'input-group-text text-black input-size-200',
        name: {
          valid: true,
          value: '',
          label: 'Property Nickname',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        address: {
          valid: true,
          value: '',
          label: 'Property Address',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        city: {
          valid: true,
          value: '',
          label: 'Property City',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        price: {
          valid: true,
          value: 0,
          label: 'Asking price',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        taxes: {
          valid: true,
          value: 0,
          label: 'Taxes per year',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        expenses: {
          valid: true,
          value: 0,
          label: 'Net Operating Expenses',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        income: {
          valid: true,
          value: 0,
          label: 'Net Operating Income',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        caprate: {
          valid: true,
          value: 0,
          label: 'Cap Rate',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        yearbuilt: {
          valid: true,
          value: 0,
          label: 'Building built in',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        block: {
          valid: true,
          value: 0,
          label: 'Block/Lot',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        lot: {
          valid: true,
          value: 0,
          label: 'Block/Lot',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        },
        numberofunits: {
          valid: true,
          value: 0,
          label: 'Nuber of units:',
          length: 0,
          css: 'input-group-text text-black input-size-200'
        }
      }
   
      this.saveData = this.saveData.bind(this);
      this.yearBuilt = this.yearBuilt.bind(this);
      this.setUnitNumber = this.setUnitNumber.bind(this);
  
    } 


    setUnitNumber() {
  
      let currentComponent = this;
  
      var localUnitCount = document.getElementById("inputNumberOfUnits").value;
      currentComponent.setState({ numberUnits:localUnitCount });
  
    }

    saveData() {
        let currentComponent = this;

        var validData = true;
        var localBlockLotcss = 'input-group-text text-black input-size-200';
        var localName = {
        valid: true,
        value: '',
        label: 'Property Nickname',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localAddress = {
        valid: true,
        value: '',
        label: 'Property Address',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localCity = {
        valid: true,
        value: '',
        label: 'Property City',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localPrice = {
        valid: true,
        value: '',
        label: 'Asking price',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localExpenses = {
        valid: true,
        value: '',
        label: 'Net Operating Expenses',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localIncome = {
        valid: true,
        value: '',
        label: 'Net Operating Income',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localCapRate = {
        valid: true,
        value: '',
        label: 'Cap Rate',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localTaxes = {
        valid: true,
        value: '',
        label: 'Taxes per year',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localBlock = {
        valid: true,
        value: '',
        label: 'Block/Lot',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
        var localLot = {
        valid: true,
        value: '',
        label: 'Block/Lot',
        length: 0,
        css: 'input-group-text text-black input-size-200'
        }
    
        // validate the property nickname
        localName.value = document.getElementById("lblName").value;
        localName.length = localName.value.length;

        if (localName.length < 5) {
        validData = false;
        localName.valid = false;
        localName.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the property address
        localAddress.value = document.getElementById("lblAddress").value;
        localAddress.length = localAddress.value.length;

        if (localAddress.length < 3) {
        validData = false;
        localAddress.valid = false;
        localAddress.css = "input-group-text text-danger input-size-200";
        }

        // validate the property city
        localCity.value = document.getElementById("lblCity").value;
        localCity.length = localCity.value.length;

        if (localCity.length < 3) {
        validData = false;
        localCity.valid = false;
        localCity.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the property price
        localPrice.value = validateDollar(document.getElementById("lblPrice").value);
        
        if (localPrice.value < 0){
        localPrice.value = "";
        validData = false;
        localPrice.valid = false;
        localPrice.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the property taxes
        localTaxes.value = validateDollar(document.getElementById("lblTaxes").value);
        
        if (localTaxes.value < 0){
        localTaxes.value = "";
        validData = false;
        localTaxes.valid = false;
        localTaxes.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the Cap Rate
        localCapRate.value = validateDollar(document.getElementById("lblCapRate").value);
        
        if (localCapRate.value < 0){
            localCapRate.value = "";
        validData = false;
        localCapRate.valid = false;
        localCapRate.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the net operating expenses
        localExpenses.value = validateDollar(document.getElementById("lblExpenses").value);
        
        if (localExpenses.value < 0){
            localExpenses.value = "";
        validData = false;
        localExpenses.valid = false;
        localExpenses.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the net operating income
        localIncome.value = validateDollar(document.getElementById("lblIncome").value);
        
        if (localIncome.value < 0){
            localIncome.value = "";
        validData = false;
        localIncome.valid = false;
        localIncome.css = "input-group-text text-danger input-size-200";
        }
    
        // validate the block 
        localBlock.value = parseInt(document.getElementById("lblBlock").value);
        
        if (isNaN(localBlock.value)) {
            localBlock.value = -1;
        }

        if (localBlock.value < 0){
            localBlock.value = 0;
            validData = false;
            localBlock.valid = false;
            localBlock.css = "input-group-text text-danger input-size-200";
            localBlockLotcss = "input-group-text text-danger input-size-200";
        }    
    
        // validate the lot 
        localLot.value = parseInt(document.getElementById("lblLot").value);
        
        if (isNaN(localLot.value)) {
            localLot.value = -1;
        }

        if (localLot.value < 0){
            localLot.value = 0;
            validData = false;
            localLot.valid = false;
            localLot.css = "input-group-text text-danger input-size-200";
            localBlockLotcss = "input-group-text text-danger input-size-200";
        }  
        
        currentComponent.setState({ name:localName, address:localAddress, city:localCity, price:localPrice, taxes:localTaxes, expenses:localExpenses, caprate:localCapRate, block:localBlock, lot:localLot, income:localIncome, blocklotcss:localBlockLotcss });
        if (validData==true)
        {
            var obj = {
                nickname: document.getElementById("lblName").value,
                address: document.getElementById("lblAddress").value,
                city: document.getElementById("lblCity").value,
                asking_price: document.getElementById("lblPrice").value,
                taxes: document.getElementById("lblTaxes").value,
                net_operating_expences: document.getElementById("lblExpenses").value,
                net_operating_income: document.getElementById("lblIncome").value,
                cap_rate: document.getElementById("lblCapRate").value,
                block: document.getElementById("lblBlock").value,
                lot: document.getElementById("lblLot").value,
                tax_abatement: document.getElementById("inputTaxAbatement").value,
                fuel_type: document.getElementById("inputFuelType").value,
                tenant_pays: document.getElementById("inputTennantsPayUtilities").value,
                built: document.getElementById("inputYearBuilt").value,
                notes: document.getElementById("inputNotes").value,
                number_of_units: currentComponent.state.numberUnits,
                unit_01: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_02: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_03: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_04: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_05: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_06: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_07: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_08: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_09: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_10: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_11: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_12: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_13: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_14: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_15: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_16: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_17: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_18: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_19: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                },
                unit_20: {
                    rent: 0,
                    bedroom: 0,
                    bath: 0,
                    vacant: '',
                    catagory: ''
                }
            }

            switch (currentComponent.state.numberUnits){
                case 1: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        break;
                case 2: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        break;  
                case 3: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        break;  
                case 4: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        break;   
                case 5: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        break;    
                case 6: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        break;     
                case 7: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        break;     
                case 8: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        break;     
                case 9: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        break;     
                case 10: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        break;    
                case 11: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        break;     
                case 12: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        break;     
                case 13: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        break;     
                case 14: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        break;    
                case 15: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        break;   
                case 16: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        unit_16.rent = document.getElementById("Rent16").value;
                        unit_16.bedroom = document.getElementById("Bedroom16").value;
                        unit_16.bath = document.getElementById("Bathroom16").value;
                        unit_16.vacant = document.getElementById("RentedStatus16").value;
                        unit_16.catagory = document.getElementById("Market16").value;
                        break; 
                case 17: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        unit_16.rent = document.getElementById("Rent16").value;
                        unit_16.bedroom = document.getElementById("Bedroom16").value;
                        unit_16.bath = document.getElementById("Bathroom16").value;
                        unit_16.vacant = document.getElementById("RentedStatus16").value;
                        unit_16.catagory = document.getElementById("Market16").value;
                        unit_17.rent = document.getElementById("Rent17").value;
                        unit_17.bedroom = document.getElementById("Bedroom17").value;
                        unit_17.bath = document.getElementById("Bathroom17").value;
                        unit_17.vacant = document.getElementById("RentedStatus17").value;
                        unit_17.catagory = document.getElementById("Market17").value;
                        break; 
                case 18: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        unit_16.rent = document.getElementById("Rent16").value;
                        unit_16.bedroom = document.getElementById("Bedroom16").value;
                        unit_16.bath = document.getElementById("Bathroom16").value;
                        unit_16.vacant = document.getElementById("RentedStatus16").value;
                        unit_16.catagory = document.getElementById("Market16").value;
                        unit_17.rent = document.getElementById("Rent17").value;
                        unit_17.bedroom = document.getElementById("Bedroom17").value;
                        unit_17.bath = document.getElementById("Bathroom17").value;
                        unit_17.vacant = document.getElementById("RentedStatus17").value;
                        unit_17.catagory = document.getElementById("Market17").value;
                        unit_18.rent = document.getElementById("Rent18").value;
                        unit_18.bedroom = document.getElementById("Bedroom18").value;
                        unit_18.bath = document.getElementById("Bathroom18").value;
                        unit_18.vacant = document.getElementById("RentedStatus18").value;
                        unit_18.catagory = document.getElementById("Market18").value;
                        break; 
                case 19: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        unit_16.rent = document.getElementById("Rent16").value;
                        unit_16.bedroom = document.getElementById("Bedroom16").value;
                        unit_16.bath = document.getElementById("Bathroom16").value;
                        unit_16.vacant = document.getElementById("RentedStatus16").value;
                        unit_16.catagory = document.getElementById("Market16").value;
                        unit_17.rent = document.getElementById("Rent17").value;
                        unit_17.bedroom = document.getElementById("Bedroom17").value;
                        unit_17.bath = document.getElementById("Bathroom17").value;
                        unit_17.vacant = document.getElementById("RentedStatus17").value;
                        unit_17.catagory = document.getElementById("Market17").value;
                        unit_18.rent = document.getElementById("Rent18").value;
                        unit_18.bedroom = document.getElementById("Bedroom18").value;
                        unit_18.bath = document.getElementById("Bathroom18").value;
                        unit_18.vacant = document.getElementById("RentedStatus18").value;
                        unit_18.catagory = document.getElementById("Market18").value;
                        unit_19.rent = document.getElementById("Rent19").value;
                        unit_19.bedroom = document.getElementById("Bedroom19").value;
                        unit_19.bath = document.getElementById("Bathroom19").value;
                        unit_19.vacant = document.getElementById("RentedStatus19").value;
                        unit_19.catagory = document.getElementById("Market19").value;
                        break; 
                case 20: unit_01.rent = document.getElementById("Rent01").value;
                        unit_01.bedroom = document.getElementById("Bedroom01").value;
                        unit_01.bath = document.getElementById("Bathroom01").value;
                        unit_01.vacant = document.getElementById("RentedStatus01").value;
                        unit_01.catagory = document.getElementById("Market01").value;
                        unit_02.rent = document.getElementById("Rent02").value;
                        unit_02.bedroom = document.getElementById("Bedroom02").value;
                        unit_02.bath = document.getElementById("Bathroom02").value;
                        unit_02.vacant = document.getElementById("RentedStatus02").value;
                        unit_02.catagory = document.getElementById("Market02").value;
                        unit_03.rent = document.getElementById("Rent03").value;
                        unit_03.bedroom = document.getElementById("Bedroom03").value;
                        unit_03.bath = document.getElementById("Bathroom03").value;
                        unit_03.vacant = document.getElementById("RentedStatus03").value;
                        unit_03.catagory = document.getElementById("Market03").value;
                        unit_04.rent = document.getElementById("Rent04").value;
                        unit_04.bedroom = document.getElementById("Bedroom04").value;
                        unit_04.bath = document.getElementById("Bathroom04").value;
                        unit_04.vacant = document.getElementById("RentedStatus04").value;
                        unit_04.catagory = document.getElementById("Market04").value;
                        unit_05.rent = document.getElementById("Rent05").value;
                        unit_05.bedroom = document.getElementById("Bedroom05").value;
                        unit_05.bath = document.getElementById("Bathroom05").value;
                        unit_05.vacant = document.getElementById("RentedStatus05").value;
                        unit_05.catagory = document.getElementById("Market05").value;
                        unit_06.rent = document.getElementById("Rent06").value;
                        unit_06.bedroom = document.getElementById("Bedroom06").value;
                        unit_06.bath = document.getElementById("Bathroom06").value;
                        unit_06.vacant = document.getElementById("RentedStatus06").value;
                        unit_06.catagory = document.getElementById("Market06").value;
                        unit_07.rent = document.getElementById("Rent07").value;
                        unit_07.bedroom = document.getElementById("Bedroom07").value;
                        unit_07.bath = document.getElementById("Bathroom07").value;
                        unit_07.vacant = document.getElementById("RentedStatus07").value;
                        unit_07.catagory = document.getElementById("Market07").value;
                        unit_08.rent = document.getElementById("Rent08").value;
                        unit_08.bedroom = document.getElementById("Bedroom08").value;
                        unit_08.bath = document.getElementById("Bathroom08").value;
                        unit_08.vacant = document.getElementById("RentedStatus08").value;
                        unit_08.catagory = document.getElementById("Market08").value;
                        unit_09.rent = document.getElementById("Rent09").value;
                        unit_09.bedroom = document.getElementById("Bedroom09").value;
                        unit_09.bath = document.getElementById("Bathroom09").value;
                        unit_09.vacant = document.getElementById("RentedStatus09").value;
                        unit_09.catagory = document.getElementById("Market09").value;
                        unit_10.rent = document.getElementById("Rent10").value;
                        unit_10.bedroom = document.getElementById("Bedroom10").value;
                        unit_10.bath = document.getElementById("Bathroom10").value;
                        unit_10.vacant = document.getElementById("RentedStatus10").value;
                        unit_10.catagory = document.getElementById("Market10").value;
                        unit_11.rent = document.getElementById("Rent11").value;
                        unit_11.bedroom = document.getElementById("Bedroom11").value;
                        unit_11.bath = document.getElementById("Bathroom11").value;
                        unit_11.vacant = document.getElementById("RentedStatus11").value;
                        unit_11.catagory = document.getElementById("Market11").value;
                        unit_12.rent = document.getElementById("Rent12").value;
                        unit_12.bedroom = document.getElementById("Bedroom12").value;
                        unit_12.bath = document.getElementById("Bathroom12").value;
                        unit_12.vacant = document.getElementById("RentedStatus12").value;
                        unit_12.catagory = document.getElementById("Market12").value;
                        unit_13.rent = document.getElementById("Rent13").value;
                        unit_13.bedroom = document.getElementById("Bedroom13").value;
                        unit_13.bath = document.getElementById("Bathroom13").value;
                        unit_13.vacant = document.getElementById("RentedStatus13").value;
                        unit_13.catagory = document.getElementById("Market13").value;
                        unit_14.rent = document.getElementById("Rent14").value;
                        unit_14.bedroom = document.getElementById("Bedroom14").value;
                        unit_14.bath = document.getElementById("Bathroom14").value;
                        unit_14.vacant = document.getElementById("RentedStatus14").value;
                        unit_14.catagory = document.getElementById("Market14").value;
                        unit_15.rent = document.getElementById("Rent15").value;
                        unit_15.bedroom = document.getElementById("Bedroom15").value;
                        unit_15.bath = document.getElementById("Bathroom15").value;
                        unit_15.vacant = document.getElementById("RentedStatus15").value;
                        unit_15.catagory = document.getElementById("Market15").value;
                        unit_16.rent = document.getElementById("Rent16").value;
                        unit_16.bedroom = document.getElementById("Bedroom16").value;
                        unit_16.bath = document.getElementById("Bathroom16").value;
                        unit_16.vacant = document.getElementById("RentedStatus16").value;
                        unit_16.catagory = document.getElementById("Market16").value;
                        unit_17.rent = document.getElementById("Rent17").value;
                        unit_17.bedroom = document.getElementById("Bedroom17").value;
                        unit_17.bath = document.getElementById("Bathroom17").value;
                        unit_17.vacant = document.getElementById("RentedStatus17").value;
                        unit_17.catagory = document.getElementById("Market17").value;
                        unit_18.rent = document.getElementById("Rent18").value;
                        unit_18.bedroom = document.getElementById("Bedroom18").value;
                        unit_18.bath = document.getElementById("Bathroom18").value;
                        unit_18.vacant = document.getElementById("RentedStatus18").value;
                        unit_18.catagory = document.getElementById("Market18").value;
                        unit_19.rent = document.getElementById("Rent19").value;
                        unit_19.bedroom = document.getElementById("Bedroom19").value;
                        unit_19.bath = document.getElementById("Bathroom19").value;
                        unit_19.vacant = document.getElementById("RentedStatus19").value;
                        unit_19.catagory = document.getElementById("Market19").value;
                        unit_20.rent = document.getElementById("Rent20").value;
                        unit_20.bedroom = document.getElementById("Bedroom20").value;
                        unit_20.bath = document.getElementById("Bathroom20").value;
                        unit_20.vacant = document.getElementById("RentedStatus20").value;
                        unit_20.catagory = document.getElementById("Market20").value;
                        break; 
            }
            
            var myJSON = JSON.stringify(obj);
            console.log(myJSON);
            var url = "https://api.mlab.com/api/1/databases/test-db/collections/buildings?apiKey=7qVBz8U57eN2ZvobziWxyhxq1UpqiLnO";

            const options = { 
                method: 'POST', 
                body: myJSON, 
                headers: new Headers({'Content-Type': 'application/json' }) 
            };

            fetch( url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {                   
                currentComponent.setState({ saveStatus:"1" });              
            });
        }
    }
  
    yearBuilt() {
  
      var date = new Date();
      var startYear = date.getFullYear();
      var endYear = startYear - 120;
  
      let items = [];         
      for (let i = startYear;i>endYear;i--) {             
          items.push(<option key={i} value={i}>{i}</option>);   
      }
      return items;
  
    }

    handleChangeNickname(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Property Nickname',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        localName.value = event.target.value;
        localName.length = localName.value.length;

        if (localName.length < 5) {
          localName.valid = false;
          localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({name:localName})
    }

    handleChangeAddress(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Property Address',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        localName.value = event.target.value;
        localName.length = localName.value.length;

        if (localName.length < 5) {
          localName.valid = false;
          localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({address:localName})
    }

    handleChangeCity(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Property City',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        localName.value = event.target.value;
        localName.length = localName.value.length;

        if (localName.length < 5) {
          localName.valid = false;
          localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({city:localName})
    }

    handleChangePrice(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Asking Price',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price
        localName.value = validateDollar(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < .01){
            localName.value = "";
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({price:localName})
    }

    handleChangeTaxes(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Taxes per year',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price
        localName.value = validateDollar(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < .01){
            localName.value = "";
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({taxes:localName})
    }

    handleChangeExpenses(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Net Operating Expenses',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price
        localName.value = validateDollar(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < .01){
            localName.value = "";
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({expenses:localName})
    }

    handleChangeIncome(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Net Operating Income',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price
        localName.value = validateDollar(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < .01){
            localName.value = "";
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({income:localName})
    }

    handleChangeCaprate(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Cap Rate',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price

        localName.value = validateDollar(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < .01){
            localName.value = 0;
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({caprate:localName})
    }

    handleChangeBlock(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Block/Lot',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price

        localName.value = parseInt(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < 1){
            localName.value = 0;
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({block:localName, blocklotcss:localName.css})
    }

    handleChangeLot(event) {
        var localName = {
            valid: true,
            value: '',
            label: 'Block/Lot',
            length: 0,
            css: 'input-group-text text-black input-size-200'
          }
        // validate the property price

        localName.value = parseInt(event.target.value);

        if (isNaN(localName.value)) {
            localName.value = -1;
        }

        if (localName.value < 1){
            localName.value = 0;
            localName.valid = false;
            localName.css = "input-group-text text-danger input-size-200";
        }
        this.setState({lot:localName, blocklotcss:localName.css})
    }

    renderSave = () => {

        if (this.state.saveStatus == 0){
            return (
                <div className="App">  
                    &nbsp; 
                </div>
            )
        } else {
            return (
                <div className="App"> 
                    Record Saved  
                </div>
            )
        }

    }

    renderData = () => {       

        var localUnitCount = this.state.numberUnits;
        var idArray = [];
    
        for (var counter=0;counter<localUnitCount;counter++) {
          var id = '';
          var idObject = {
            counter: 0,
            idNameBedroom: '',
            idNameBathroom: '',
            idRent: '',
            idMarket: '',
            idRentedStatus: ''
          }
    
          //build the id for the bedroom item
          if (counter<10) {id="Bedroom0"} else {id="Bedroom"};
          id=id+counter;
          idObject.idNameBedroom  = id+(counter+1);
    
          //build the id for the bathroom item
          if (counter<10) {id="Bathroom0"} else {id="Bathroom"};
          id=id+counter;
          idObject.idNameBathroom  = id+(counter+1);
    
          //build the id for the rent item
          if (counter<10) {id="Rent0"} else {id="Rent"};
          id=id+counter;
          idObject.idRent  = id;
    
          //build the id for the mareket item
          if (counter<10) {id="Market0"} else {id="Market"};
          id=id+counter;
          idObject.idMarket  = id;
    
          //build the id for the rented status item
          if (counter<10) {id="RentedStatus0"} else {id="RentedStatus"};
          id=id+counter;
          idObject.idRentedStatus  = id;
    
          idObject.counter = counter+1;
          idArray[counter] = idObject;
    
        }
    
        return idArray.map( item => (
    
            <div>
                <hr />
                <div className="text-black text-bold">
                    <label> Unit {item.counter} </label>
                </div>    
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text text-black input-size-200">Rent for Unit {item.counter}</span>
                    </div>
                    <input id={item.idRent} type="text" className="form-control" />
                </div> 
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text text-black input-size-200">Rented status of Unit {item.counter}</span>
                    </div>                                        
                    <select className="custom-select text-black" id={item.idRentedStatus}>
                        <option value="rented" selected>Rented</option>
                        <option value="vacant">Vacant</option>
                    </select>
                </div> 
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text text-black input-size-200">Bedrooms in Unit {item.counter}</span>
                    </div>                                        
                    <select className="custom-select text-black" id={item.idNameBedroom}>
                        <option value="1" selected>1 bedroom</option>
                        <option value="2">2 bedrooms</option>
                        <option value="3">3 bedrooms</option>
                        <option value="4">4 bedrooms</option>
                        <option value="5">5 bedrooms</option>
                    </select>
                </div> 
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text text-black input-size-200">Bathrooms in Unit {item.counter}</span>
                    </div>                                        
                    <select className="custom-select text-black" id={item.idNameBathroom}>
                        <option value="1" selected>1 bathroom</option>
                        <option value="2">2 bathrooms</option>
                        <option value="3">3 bathrooms</option>
                        <option value="4">4 bathrooms</option>
                        <option value="5">5 bathrooms</option>
                    </select>
                </div> 
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text text-black input-size-200">Rent category for Unit {item.counter}</span>
                    </div>                                        
                    <select className="custom-select text-black" id={item.idMarket}>
                        <option value="market" selected>Market value</option>
                        <option value="stabalized">Rent stabalized</option>
                        <option value="controlled">Rent controlled</option>
                    </select>
                </div> 
            </div>
          ) )
      }
    
    render() {

        if (this.state.saveStatus == 1){
            return (

                <div className="App">      
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Property Management</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/loadproperty">View Saved Properties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/enterproperty">Enter New Property</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        {this.renderSave()} 
                    </div>
                </div>
            )
        } else {
 
        return (

            <div className="App">      
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Property Management</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/loadproperty">View Saved Properties</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/enterproperty">Enter New Property</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.renderSave()} 
                </div>
                <div className="d-flex flex-wrap justify-content-center position-absolute w-100 align-items-center align-content-center">
                    <div className="container">
                        <div className="row">
                            <div md="6">
                                <form>
                                    <p className="h4 text-center py-4">Enter the property information</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.name.css}>{this.state.name.label}</span>
                                        </div>
                                        <input id="lblName" type="text" className="form-control" onChange={this.handleChangeNickname.bind(this)} onBlur={this.handleChangeNickname.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.address.css}>{this.state.address.label}</span>
                                        </div>
                                        <input id="lblAddress" type="text" className="form-control" onChange={this.handleChangeAddress.bind(this)} onBlur={this.handleChangeAddress.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.city.css}>{this.state.city.label}</span>
                                        </div>
                                        <input id="lblCity" type="text" className="form-control" onChange={this.handleChangeCity.bind(this)} onBlur={this.handleChangeCity.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.price.css}>{this.state.price.label}</span>
                                        </div>
                                        <input id="lblPrice" type="text" className="form-control" defaultValue={this.state.price.value} onBlur={this.handleChangePrice.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.taxes.css}>{this.state.taxes.label}</span>
                                        </div>
                                        <input id="lblTaxes" type="text" className="form-control" defaultValue={this.state.taxes.value} onBlur={this.handleChangeTaxes.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.expenses.css}>{this.state.expenses.label}</span>
                                        </div>
                                        <input id="lblExpenses" type="text" className="form-control" defaultValue={this.state.expenses.value} onBlur={this.handleChangeExpenses.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.income.css}>{this.state.income.label}</span>
                                        </div>
                                        <input id="lblIncome" type="text" className="form-control" defaultValue={this.state.income.value} onBlur={this.handleChangeIncome.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.caprate.css}>{this.state.caprate.label}</span>
                                        </div>
                                        <input id="lblCapRate" type="text" className="form-control" defaultValue={this.state.caprate.value} onBlur={this.handleChangeCaprate.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.blocklotcss}>{this.state.block.label}</span>
                                        </div>
                                        <input id="lblBlock" type="text" className="form-control" defaultValue={this.state.block.value} onBlur={this.handleChangeBlock.bind(this)}/>
                                        <input id="lblLot" type="text" className="form-control" defaultValue={this.state.lot.value} onBlur={this.handleChangeLot.bind(this)}/>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.yearbuilt.css}>Tax abatements?</span>
                                        </div>                                        
                                        <select className="custom-select text-black" id="inputTaxAbatement">
                                            <option value="yes" selected>Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.yearbuilt.css}>Fuel Type</span>
                                        </div>                                        
                                        <select className="custom-select text-black" id="inputFuelType">
                                            <option value="gas" selected>Gas</option>
                                            <option value="oil">Oil</option>
                                        </select>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.yearbuilt.css}>Tennants pay utilities</span>
                                        </div>                                        
                                        <select className="custom-select text-black" id="inputTennantsPayUtilities">
                                            <option value="yes" selected>Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.yearbuilt.css}>{this.state.yearbuilt.label}</span>
                                        </div>                                        
                                        <select className="custom-select text-black" id="inputYearBuilt">
                                            {this.yearBuilt()}
                                        </select>
                                    </div> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className={this.state.numberofunits.css}>{this.state.numberofunits.label}</span>
                                        </div>                                        
                                        <select className="custom-select text-black" id="inputNumberOfUnits" onChange={() => { 
                                        this.setUnitNumber();
                                        }}>
                                            <option value="0" selected>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                            <option value="6">Six</option>
                                            <option value="7">Seven</option>
                                            <option value="8">Eight</option>
                                            <option value="9">Nine</option>
                                            <option value="10">Ten</option>
                                            <option value="11">Eleven</option>
                                            <option value="12">Twelve</option>
                                            <option value="13">Thirteen</option>
                                            <option value="14">Fourteen</option>
                                            <option value="15">Fifteen</option>
                                            <option value="16">Sixteen</option>
                                            <option value="17">Seventeen</option>
                                            <option value="18">Eighteen</option>
                                            <option value="19">Nineteen</option>
                                            <option value="20">Twenty</option>
                                        </select>
                                    </div> 
                                    <div>
                                        {this.renderData()}
                                    </div> 
                                    <hr />
                                    <label>Notes:</label>
                                    <div class="row">
                                        <textarea rows="5" id="inputNotes" class="form-control" />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <button type="button" className="btn btn-primary" onClick={() => { 
                                        this.saveData();
                                        }}>Save</button>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )           
        }

    }
}

export default enterproperty;