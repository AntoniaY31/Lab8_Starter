# Lab 8 - Starter

# Manshi Yang

# A15826876

1. Ans: I would fit my automated tests within a Github action so that it runs whenever the code get pushed. By doing this, we can guarantee that every attempt of push gets tested automatically which prevents the overall project get carshed if someone acccidentally push some errored code to the repository.
2. Ans: No. It's better to do unit testing to test functions.
3. Ans: No. Unit testing can help us debug on a small sccale without moving many parts. However, message feature may involves many parts so that it is hard to do unit testing.
4. Ans: Yes. This “max message length” feature seems to be able to tested without involving too many parts since we only need to change the message length. Thus it is plausible to do unit testing on it.