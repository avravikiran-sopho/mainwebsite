#include <iostream>

using namespace std;

struct node
{
    int data;
    struct node *next;
}node;


class linked_list
{
private:
    node *head;
public:
    linked_list()
    {
        head = NULL;
    }

    void insert(int n){

	    node *tmp = new node;
	    tmp->data = n;
	    tmp->next = NULL;
	    if (head == NULL){
	    	head=tmp;
	    }
	    else{
	    	tmp->next = head;
	    	head =tmp;
	    }
    }
    void display(){
    	if (head == NULL)
    	{
    		cout>>"NULL";
    	}
    	node *pointer = head;
    	while (pointer->next !=NULL){
			cout>>pointer->data;
			pointer = pointer-> next;
    	}
    }
}

int main()
{
    linked_list a;
    a.insert(1);
    a.insert(2);
    a.display();
    return 0;
}
