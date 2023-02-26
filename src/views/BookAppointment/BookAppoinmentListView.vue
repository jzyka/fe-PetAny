<template>
    <section class="vet-appoinment-list">
        <v-container>
            <v-row>
                <div class="vet-appoinment-filter">
                    <h5 class="">Temukan dokter terdekat dan buat janji</h5>
                    <div class="filter-contain">
                        <div class="search-input">
                            <p class="field-title">Cari Disini</p>
                            <v-text-field class="input-contain"
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Cari dokter atau klinik"
                            solo
                            hide-details
                            background-color=#F1F1F1
                            ></v-text-field>
                        </div>
                        <div class="location-input">
                            <p class="field-title">Lokasi</p>
                            <v-select class="input-contain"
                            v-model="location"
                            append-icon="mdi-chevron-down"
                            label="Terdekat"
                            solo
                            hide-details
                            background-color=#F1F1F1
                            ></v-select>
                        </div>
                        <div class="service-input">
                            <p class="field-title">Jasa</p>
                            <v-select class="input-contain"
                            v-model="service"
                            append-icon="mdi-chevron-down"
                            label="Grooming"
                            solo
                            hide-details
                            background-color=#F1F1F1
                            ></v-select>
                        </div>
                        <div class="schedule-input">
                            <p class="field-title">Jadwal</p>
                            <v-select class="input-contain"
                            v-model="schedule"
                            append-icon="mdi-chevron-down"
                            label="Minggu, 29 January 9:00"
                            solo
                            hide-details
                            background-color=#F1F1F1
                            ></v-select>
                        </div>
                    </div>
                </div>
                <div class="vet-contain">
                    <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                <router-link tag="a" to="/" class="card--vetproduct">
                    <div class="card--vetproduct__image">
                    <v-img
                        src="@/assets/vet-img.png"
                        contain
                        class="rounded-lg"
                    ></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                    <p class="name">
                        Klinik Hewan Lovely Vets lorem ipsum dolor sit
                    </p>
                    <p class="hours-price">09.00 - 19.00</p>
                    <p class="location">1.2 KM</p>
                    </div>
                </router-link>
                </div>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section {
    &.vet-appoinment-list {
        .vet-contain {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            row-gap: 20px;
            
            .card {
                &--vetproduct {
                    width: 19%;
                }
            }
        }
        .vet-appoinment-filter {
            width: 100%;
            margin-bottom: 20px;
        }

        .filter-contain {
            background: #FFFFFF;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
            padding: 35px;
            gap: 20px;
            margin-top: 20px;
        } 
        .input-contain {
            border-radius: 10px;
        }
        .search-input {
            width: 40%;
        }
        .location-input {
            width: 18%;
        }
        .service-input {
            width: 18%;
        }
        .schedule-input {
            width: 24%;
        }
        .field-title {
            font-size: 18px;
            font-weight: $font-weight-medium;
        }
    }
}
</style>