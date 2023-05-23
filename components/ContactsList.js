import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";
import Contact from "./Contact";
const ContactsList = () => {
    const fields = [
        Contacts.Fields.Id,
        Contacts.Fields.Name,
        Contacts.Fields.PhoneNumbers,
    ];

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({fields: fields});
                if (data?.length > 0) {
                    setContacts(data.filter(el => el.name !== undefined
                        && el.phoneNumbers !== undefined));
                }
            }
        })();
    }, []);
    const keyExtractor = (item, idx) => {
        return item?.id?.toString() || idx?.toString();
    };
    const renderItem = ({ item, index }) => {
        return <Contact contact={item} />;
    };
    return (
        <View>
            {contacts?.length > 0 ?
                <FlatList
                    data={contacts}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    style={styles.list}
                />
                :
                <View/>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    list: {
        margin: 5,
    },
});
export default ContactsList;