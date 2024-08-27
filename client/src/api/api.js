import axios from "axios";
import {ANIMALS, APPLICATIONS, BASE_URL, CATS, DOGS, OTHER, USERS} from "./endpoints";

export const fetchAnimalsData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${ANIMALS}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const fetchCatsData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${ANIMALS}/${CATS}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const fetchDogsData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${ANIMALS}/${DOGS}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const fetchOtherAnimalsData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${ANIMALS}/${OTHER}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const fetchAnimal = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${ANIMALS}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createApplication = async (application) => {
    try {
        const response = await axios.post(`${BASE_URL}/${APPLICATIONS}`, application);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${USERS}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createAnimal = async (animal) => {
    try {
        const response = await axios.post(`${BASE_URL}/${ANIMALS}`, animal);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateApplication = async (id, application) => {
    try {
        const response = await axios.put(`${BASE_URL}/${APPLICATIONS}/${id}`, application);
        return response.data;
    } catch (error) {
        throw error;
    }
};