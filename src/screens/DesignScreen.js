import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image, ScrollView, Text, Pressable } from "react-native";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";


const DesignScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    

    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation}/>
                {/* <View style={styles.searchRow}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                </View> */}

                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="What can I help you find?"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                </View>

            <ScrollView>
                
               

                <View>
                    <Image
                        style={styles.adImage1}
                        source={require('../assets/street.jpg')}
                    />

                    <View style={styles.ad1}>
                        <Text style={styles.adTitle1}>Designs</Text>
                        <Text style={styles.adText1}>Now featuring around the world</Text>
                        <Text style={styles.adContent1}>Made by people</Text>
                    </View>
                </View>

                <View style={styles.adImage2Row}>
                    <Image
                        style={styles.adImage2}
                        source={require('../assets/apartment.jpg')}
                    />

                    <Image
                        style={styles.adImage2}
                        source={require('../assets/office.jpg')}
                    />
                </View>

                <Text style={styles.adTitle2}>More Designs</Text>
                <Text style={styles.adText2}>Unique patterns</Text>
                <Text style={styles.adContent2}>very different perspective</Text>

                <View style={styles.trailReview}>
                    <Text style={styles.trailReviewTitle}></Text>
                    <Image
                        style={styles.trailImage}
                        source={require('../assets/apartment.jpg')}
                    />

                    <Text style={styles.trailReviewPark1}>Asphalt</Text>
                    <Text style={styles.trailReviewPark2}>National Park</Text>
                    <Pressable style={styles.trailButton}>
                        <Text style={styles.trailButtonText}>See Review</Text>
                    </Pressable>
                </View>

         
            </ScrollView>
            <Footer navigation={navigation}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchRow: {
        backgroundColor: '#686868',
        height: 60,
    },
    searchInput: {
        alignSelf: 'center',
        borderWidth: 1,
        width: 350,
        height: 40,
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'System',
    },
    adImage1: {
        height: 180,
        width: 450,
    },
    ad1: {
        backgroundColor: '#FC8A49',
    },
    adTitle1: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 30,
    },
    adText1: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 30,
        color: '#FFFFFF',
    },
    adContent1: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 15,
        color: '#FFFFFF',
        paddingBottom: 20,
    },
    adImage2Row: {
        flexDirection: 'row',
    },
    adImage2: {
        height: 180,
        width: '50%',
        resizeMode: 'contain',
    },
    adTitle2: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 15,
        color: '#8B8B8B',
    },
    adText2: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 15,
        color: '#FC8A49',
    },
    adContent2: {
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 10,
        color: '#000000',
        paddingBottom: 20,
    },
    trailReview: {
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingBottom: 50,
    },
    trailReviewTitle: {
        fontFamily: 'System',
        fontSize: 30,
        color: '#FFFFFF',
    },
    trailImage: {
        height: 220,
        width: '100%',
    },
    trailReviewPark1: {
        fontFamily: 'System',
        fontSize: 45,
        color: '#FFFFFF',
    },
    trailReviewPark2: {
        fontFamily: 'System',
        fontSize: 20,
        color: '#FFFFFF',
        paddingBottom: 10,
    },
    trailButton: {
        width: '50%',
        backgroundColor: '#FC8A49',
        alignItems: 'center',
        borderRadius: 5,
    },
    trailButtonText: {
        fontSize: 25,
        color: '#FFFFFF',
    },

});

export default DesignScreen;
