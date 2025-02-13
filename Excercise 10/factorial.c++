#include <bits/stdc++.h>
using namespace std;

int main(){
    int n,rem=1;
    cout<<"Enter Any Number";
    cin>>n;
    for(int i=n;i>=1;i--){
        rem=rem*i;
    }
    cout<<"Factorial of "<<n<<" is"<<rem;
    return 0;
}