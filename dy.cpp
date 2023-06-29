#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int> arr(7,0);
    
    for(auto it:arr){
        cout<<it<<" ";
    }
    cout<<endl;

    cout<<&arr<<endl;

    arr.push_back(8);

    for(auto it:arr){
        cout<<it<<" ";
    }

    cout<<&arr<<endl;
    
}