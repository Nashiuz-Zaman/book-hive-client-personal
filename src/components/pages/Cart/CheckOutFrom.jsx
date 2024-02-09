
import { useDispatch } from 'react-redux';
// import in paymentInfoSlice/paymentInfoSlice
import { setFormData} from '../../../features/paymentInfoSlice/paymentInfoSlice';

const CheckOutFrom = () => {
      const dispatch = useDispatch()
      const handleSaveAddress = (event) => {
            event.preventDefault()
            const form = event.target
            const fullName = form.fullName.value;
            const shippingAddress = form.shippingAddress.value;
            const mobileNumber = form.mobileNumber.value;
            const billingAddress = form.billingAddress.value;
            const paymentAddressInfo = { fullName, shippingAddress, mobileNumber, billingAddress, };
            // console.log(paymentAddressInfo);
            // Dispatch the action and send to data in redux state
            dispatch(setFormData(paymentAddressInfo));
      }
      return (
            <div className='p-2 w-[320px] border border-[#F85454]'>
                  <h3 className='text-2xl'>Add New Delivery Address</h3>
                  <form onSubmit={handleSaveAddress}>
                        <div className='grid grid-cols-1 gap-2 '>
                              {/* for full name  data*/}
                              <div>
                                    <label className="block text-md  text-gray-700">Full Name</label>
                                    <input type="text"
                                          placeholder="Input Full name"
                                          required
                                          name='fullName'
                                          className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                                    />
                              </div>
                              {/* for mobile data */}
                              <div>
                                    <label className="block text-md  text-gray-700">Mobile Number</label>
                                    <input type="text"
                                          placeholder="Mobile Number"
                                          required
                                          name='mobileNumber'
                                          className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                                    />
                              </div>
                              {/* for shipping address data */}
                              <div>
                                    <label className="block text-md  text-gray-700">Shipping Address</label>
                                    <input type="text"
                                          placeholder="Input Your Address"
                                          required
                                          name='shippingAddress'
                                          className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                                    />
                              </div>
                              {/* for billing address data  */}
                              <div>
                                    <label className="block text-md  text-gray-700">Billing Address</label>
                                    <input type="text"
                                          placeholder="Your Billing Address"
                                          required
                                          name='billingAddress'
                                          className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                                    />
                              </div>


                        </div>
                        {/* from submit button here  */}
                        <button type='submit' className='bg-black text-white py-2 px-4 mt-2 rounded-md hover:bg-[#F85455]'>Save</button>

                  </form>
            </div>
      );
};

export default CheckOutFrom;