const slowNetwork = () => {
    let slow = null
    if (window.NetworkInformation) {
        slow = NetworkInformation.downlink < 350
    }
    return slow
}

export default slowNetwork;