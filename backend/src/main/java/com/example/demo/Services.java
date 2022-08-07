package com.example.demo;

public class Services {
	public boolean enable = false;
	public boolean[][] schedule = new boolean[10][7];

	  public Services (int code) {
	  }
	  
	  public void CheckEnable()
	  {
		  for(int i = 0;i<10;i++)
		  {
			  for(int j = 0;j<7;j++)
			  {
				  if(schedule[i][j])
				  {
					  enable = true;
					  break;
				  }
			  }
		  }
	  }
}

