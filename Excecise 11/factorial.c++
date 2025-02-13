#include<bits/stdc++.h>

using namespace std;
int fact(){
    int num,fac=1;
    cout<<"Enter Your Number:";
    cin>>num;
    for(int i=num;i>0;i--){
        fac=fac*i;
    }
        cout<<"The Factorial of a Number is:"<<fac;

    return 0;
}
int main(){
    fact();
}
