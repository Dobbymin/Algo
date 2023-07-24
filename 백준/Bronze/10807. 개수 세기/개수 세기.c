#include <stdio.h>

int main(void)
{
	int N, i, v, cnt = 0;
	int arr[100] = { 0 };

	scanf("%d", &N);
	getchar();

	for (i = 0; i < N; i++)
	{
		scanf("%d", &arr[i]);
		getchar();
	}
	scanf("%d", &v);
	getchar();

	for (i = 0; i < N; i++)
	{
		if (arr[i] == v)
		{
			cnt++;
		}
	}
	printf("%d", cnt);

	return 0;
}