exports.processPayment = async (orderId,paymentMethod,amount)=>{
    const { orderId, paymentMethod, amount } = req.body;

  try {
    if (paymentMethod === 'credit card') {
      const paymentResult = await processCreditCardPayment(amount);
      if (paymentResult.success) {
        return true ;
    } else {
        return false ;
    }
    } else if (paymentMethod === 'cash on delivery') {
       return true ;
    } else {
        return false ;
    }
  } catch (err) {
    console.error(err);
    return  false ;
  }
}

