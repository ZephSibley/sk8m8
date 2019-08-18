const slowNetwork = () => {
    let slow = null
    if (window.NetworkInformation) {
        slow = NetworkInformation.downlink < 500
    }
    return slow
}

export default slowNetwork;