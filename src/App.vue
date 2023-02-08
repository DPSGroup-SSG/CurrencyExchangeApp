<script>
import IAutocomplete from "./components/IAutocomplete.vue"
import axios from "axios";

/*
 Gets a list of all the available currencies. Returns data in the form of:
 data: {
    aud: "Australian Dollar",
    eur: "Euro",
    gbp: "Pound Sterling"
    usd: "United States Dollar",
 }
 */
const allCurrenciesUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

/*
 Gets a list of all exchange rates for the given currency. Returns data in the form of:
 data: {
    "date": "2023-02-01",
    "eur": {
        "aud": 1.53988,
        "usd": 1.086365,
        "gbp": 0.882308
    }
 }
 */
const getCurrencyRatesUrl = (currency) => `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

export default {
    name: "App"
}

</script>

<template>

</template>

<style scoped>

</style>
