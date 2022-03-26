#include <iostream>
int file_direction()
{
	printf("File name:" + "file_name()");
}
int main()
{
    for (int count=0; count < 100; ++count)
    {
        std::cout << PRNG() << "\t";
 
    
        if ((count+1) % 5 == 0)
            std::cout << "\n";
	}
}