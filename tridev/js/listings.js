const movieList = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');


const movies = [
    { 
      title: 'Dunki', 
      genre: 'Social-Comedy', 
      year: '2023', 
      director: 'Rajkumar Hirani', 
      leadActor: 'Shah Rukh Khan',
      backgroundImage : '/media/dunki.jpg'
    },
    { 
      title: '3 Idiots', 
      genre: 'Comedy-Drama', 
      year: '2009', 
      director: 'Rajkumar Hirani', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/threeid.jpg'
    },
    { 
      title: 'Taare Zameen Par', 
      genre: 'Drama', 
      year: '2007', 
      director: 'Aamir Khan', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/tzp.jpg' 
    },
    { 
        title: 'PK', 
        genre: 'Social-Comedy', 
        year: '2014', 
        director: 'Rajkumar Hirani', 
        leadActor: 'Aamir Khan',
        backgroundImage : '/media/pk.jpg'
      },
    { 
      title: 'Dangal', 
      genre: 'Biographical-Sports', 
      year: '2016', 
      director: 'Nitesh Tiwari', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/dangal.jpg'
    },
    { 
      title: 'Lagaan', 
      genre: 'Epic-Sports', 
      year: '2001', 
      director: 'Ashutosh Gowariker', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/lagaan.jpg'
    },
    { 
      title: 'Dil Chahta Hai', 
      genre: 'Drama-Romance', 
      year: '2001', 
      director: 'Farhan Akhtar', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/dch.jpg'
    },
    { 
      title: 'Rang De Basanti', 
      genre: 'Drama', 
      year: '2006', 
      director: 'Rakeysh Omprakash Mehra', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/rdb.jpg'
    },
    { 
      title: 'Ghajini', 
      genre: 'Action-Thriller', 
      year: '2008', 
      director: 'A. R. Murugadoss', 
      leadActor: 'Aamir Khan',
      backgroundImage : '/media/ghajini.jpg'
    },
    { 
      title: 'Golmaal: Fun Unlimited', 
      genre: 'Comedy', 
      year: '2006', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/golmal1.jpg'
    },
    { 
      title: 'Golmaal Returns', 
      genre: 'Comedy', 
      year: '2008', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/golreturns.jpg'
    },
    { 
      title: 'Golmaal 3', 
      genre: 'Comedy', 
      year: '2010', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/g3.jpg'
    },
    { 
      title: 'Golmaal Again', 
      genre: 'Comedy', 
      year: '2017', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/glmlagain.jpg'
    },
    { 
      title: 'Singham', 
      genre: 'Action', 
      year: '2011', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/singhum.jpg' 
    },
    { 
      title: 'Singham Returns', 
      genre: 'Action', 
      year: '2014', 
      director: 'Rohit Shetty', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/srtn.jpg' 
    },
    { 
      title: 'Tanaji: The Unsung Warrior', 
      genre: 'Biographical-Action', 
      year: '2020', 
      director: 'Om Raut', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/tanaji.jpg'
    },
    { 
      title: 'Shivaay', 
      genre: 'Action-Drama', 
      year: '2016', 
      director: 'Ajay Devgn', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/shivaay.jpg'
    },
    { 
      title: 'Raajneeti', 
      genre: 'Political-Drama', 
      year: '2010', 
      director: 'Prakash Jha', 
      leadActor: 'Ajay Devgn',
      backgroundImage : '/media/rajneeti.jpg'
    },
    { 
      title: 'Drishyam', 
      genre: 'Thriller-Drama', 
      year: '2015', 
      director: 'Nishikant Kamat', 
      leadActor: 'Ajay Devgn' ,
      backgroundImage : '/media/drishyam.jpg'
    },
    { 
      title: 'Munna Bhai M.B.B.S.', 
      genre: 'Comedy-Drama', 
      year: '2003', 
      director: 'Rajkumar Hirani', 
      leadActor: 'Sanjay Dutt',
      backgroundImage : '/media/munnabhai.jpg'
    },
    { 
      title: 'Lage Raho Munna Bhai', 
      genre: 'Comedy-Drama', 
      year: '2006', 
      director: 'Rajkumar Hirani', 
      leadActor: 'Sanjay Dutt' ,
      backgroundImage : '/media/mbbs.jpg'
    },
    { 
      title: 'Sanju', 
      genre: 'Biographical-Drama', 
      year: '2018', 
      director: 'Rajkumar Hirani', 
      leadActor: 'Ranbir Kapoor',
      backgroundImage : '/media/sanju.jpg' 
    },
    
    { 
      title: 'Saala Khadoos', 
      genre: 'Sports-Drama', 
      year: '2016', 
      director: 'Sudha Kongara', 
      leadActor: 'R. Madhavan' ,
      backgroundImage : '/media/khadoos.jpg'
    },
    { 
      title: 'Rocket Singh: Salesman of the Year', 
      genre: 'Comedy-Drama', 
      year: '2009', 
      director: 'Shimit Amin', 
      leadActor: 'Ranbir Kapoor' ,
      backgroundImage : '/media/rocketsingh.jpeg'
    },
    { 
      title: 'Wake Up Sid', 
      genre: 'Drama-Romance', 
      year: '2009', 
      director: 'Ayan Mukerji', 
      leadActor: 'Ranbir Kapoor',
      backgroundImage : '/media/wakeupsid.jpg' 
    },
    { 
      title: 'Barfi!', 
      genre: 'Romantic-Comedy', 
      year: '2012', 
      director: 'Anurag Basu', 
      leadActor: 'Ranbir Kapoor' ,
      backgroundImage : '/media/barfi.jpeg'
    },
    { 
      title: 'Tamasha', 
      genre: 'Drama-Romance', 
      year: '2015', 
      director: 'Imtiaz Ali', 
      leadActor: 'Ranbir Kapoor' ,
      backgroundImage : '/media/tamasha.jpg'
    },
    { 
      title: 'Ae Dil Hai Mushkil', 
      genre: 'Romantic-Drama', 
      year: '2016', 
      director: 'Karan Johar', 
      leadActor: 'Ranbir Kapoor' ,
      backgroundImage : '/media/adhm.jpg'
    },
    
    { 
      title: 'Mujhse Dosti Karoge!', 
      genre: 'Romantic-Comedy', 
      year: '2002', 
      director: 'Kunal Kohli', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/mujhsedostikaroge.jpeg'
    },
    { 
      title: 'Koi... Mil Gaya', 
      genre: 'Sci-Fi-Drama', 
      year: '2003', 
      director: 'Rakesh Roshan', 
      leadActor: 'Hrithik Roshan',
      backgroundImage : '/media/kmg.jpeg' 
    },
    { 
      title: 'Krrish', 
      genre: 'Sci-Fi-Action', 
      year: '2006', 
      director: 'Rakesh Roshan', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/krrish.jpg'
    },
    { 
      title: 'Dhoom 2', 
      genre: 'Action-Thriller', 
      year: '2006', 
      director: 'Sanjay Gadhvi', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/dhoom2.jpeg'
    },
    { 
      title: 'Jodhaa Akbar', 
      genre: 'Historical-Drama', 
      year: '2008', 
      director: 'Ashutosh Gowariker', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/jab.jpg'
    },
    { 
      title: 'Guzaarish', 
      genre: 'Drama-Romance', 
      year: '2010', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/guzaarish.jpg'
    },
    { 
      title: 'Zindagi Na Milegi Dobara', 
      genre: 'Drama-Romance', 
      year: '2011', 
      director: 'Zoya Akhtar', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/znmd.jpg'
    },
    { 
      title: 'Agneepath', 
      genre: 'Action-Drama', 
      year: '2012', 
      director: 'Karan Malhotra', 
      leadActor: 'Hrithik Roshan' ,
      backgroundImage : '/media/agneepath.jpg'
    },
    { 
      title: 'Krrish 3', 
      genre: 'Sci-Fi-Action', 
      year: '2013', 
      director: 'Rakesh Roshan', 
      leadActor: 'Hrithik Roshan' 
    },
    { 
      title: 'Kaabil', 
      genre: 'Action-Drama', 
      year: '2017', 
      director: 'Sanjay Gupta', 
      leadActor: 'Hrithik Roshan' 
    },
    { 
      title: 'War', 
      genre: 'Action-Thriller', 
      year: '2019', 
      director: 'Siddharth Anand', 
      leadActor: 'Hrithik Roshan' 
    },
    { 
      title: 'Super 30', 
      genre: 'Biographical-Drama', 
      year: '2019', 
      director: 'Vikas Bahl', 
      leadActor: 'Hrithik Roshan' 
    },
    /*{ 
      title: 'Radhe: Your Most Wanted Bhai', 
      genre: 'Action-Thriller', 
      year: '2021', 
      director: 'Prabhu Deva', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Bharat', 
      genre: 'Drama-Action', 
      year: '2019', 
      director: 'Ali Abbas Zafar', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Kick', 
      genre: 'Action-Comedy', 
      year: '2014', 
      director: 'Sajid Nadiadwala', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Bajrangi Bhaijaan', 
      genre: 'Drama-Comedy', 
      year: '2015', 
      director: 'Kabir Khan', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Prem Ratan Dhan Payo', 
      genre: 'Drama-Romance', 
      year: '2015', 
      director: 'Sooraj Barjatya', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Dabangg', 
      genre: 'Action-Comedy', 
      year: '2010', 
      director: 'Abhinav Kashyap', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Dabangg 2', 
      genre: 'Action-Comedy', 
      year: '2012', 
      director: 'Arbaaz Khan', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Dabangg 3', 
      genre: 'Action-Comedy', 
      year: '2019', 
      director: 'Prabhu Deva', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Wanted', 
      genre: 'Action-Thriller', 
      year: '2009', 
      director: 'Prabhu Deva', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Ready', 
      genre: 'Comedy-Romance', 
      year: '2011', 
      director: 'Anees Bazmee', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Hum Dil De Chuke Sanam', 
      genre: 'Drama-Romance', 
      year: '1999', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Partner', 
      genre: 'Comedy-Romance', 
      year: '2007', 
      director: 'David Dhawan', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'London Dreams', 
      genre: 'Musical-Drama', 
      year: '2009', 
      director: 'Vipul Amrutlal Shah', 
      leadActor: 'Salman Khan' 
    },
    { 
      title: 'Bajirao Mastani', 
      genre: 'Historical-Drama', 
      year: '2015', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Padmaavat', 
      genre: 'Historical-Drama', 
      year: '2018', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Gully Boy', 
      genre: 'Musical-Drama', 
      year: '2019', 
      director: 'Zoya Akhtar', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Simmba', 
      genre: 'Action-Comedy', 
      year: '2018', 
      director: 'Rohit Shetty', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Befikre', 
      genre: 'Romantic-Comedy', 
      year: '2016', 
      director: 'Aditya Chopra', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Lootera', 
      genre: 'Romantic-Drama', 
      year: '2013', 
      director: 'Vikramaditya Motwane', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Goliyon Ki Raasleela Ram-Leela', 
      genre: 'Romantic-Drama', 
      year: '2013', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Ranveer Singh' 
    },
    { 
      title: 'Pyaar Ka Punchnama', 
      genre: 'Comedy-Romance', 
      year: '2011', 
      director: 'Luv Ranjan', 
      leadActor: 'Kartik Aaryan' 
    },
    { 
      title: 'Pyaar Ka Punchnama 2', 
      genre: 'Comedy-Romance', 
      year: '2015', 
      director: 'Luv Ranjan', 
      leadActor: 'Kartik Aaryan' 
    },
    { 
      title: 'Sonu Ke Titu Ki Sweety', 
      genre: 'Comedy-Romance', 
      year: '2018', 
      director: 'Luv Ranjan', 
      leadActor: 'Kartik Aaryan' 
    },
    { 
      title: 'Love Aaj Kal', 
      genre: 'Romantic-Drama', 
      year: '2009', 
      director: 'Imtiaz Ali', 
      leadActor: 'Saif Ali Khan' 
    },
    { 
      title: 'Jab We Met', 
      genre: 'Romantic-Comedy', 
      year: '2007', 
      director: 'Imtiaz Ali', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Haider', 
      genre: 'Crime-Drama', 
      year: '2014', 
      director: 'Vishal Bhardwaj', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Udta Punjab', 
      genre: 'Crime-Drama', 
      year: '2016', 
      director: 'Abhishek Chaubey', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Padmaavat', 
      genre: 'Historical-Drama', 
      year: '2018', 
      director: 'Sanjay Leela Bhansali', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Kabir Singh', 
      genre: 'Drama-Romance', 
      year: '2019', 
      director: 'Sandeep Reddy Vanga', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Kaminey', 
      genre: 'Crime-Drama', 
      year: '2009', 
      director: 'Vishal Bhardwaj', 
      leadActor: 'Shahid Kapoor' 
    },
    { 
      title: 'Good Newwz', 
      genre: 'Comedy-Drama', 
      year: '2019', 
      director: 'Raj Mehta', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Mission Mangal', 
      genre: 'Drama', 
      year: '2019', 
      director: 'Jagan Shakti', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Airlift', 
      genre: 'Thriller-Drama', 
      year: '2016', 
      director: 'Raja Krishna Menon', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Toilet: Ek Prem Katha', 
      genre: 'Comedy-Drama', 
      year: '2017', 
      director: 'Shree Narayan Singh', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Baby', 
      genre: 'Action-Thriller', 
      year: '2015', 
      director: 'Neeraj Pandey', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Housefull', 
      genre: 'Comedy', 
      year: '2010', 
      director: 'Sajid Khan', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Housefull 2', 
      genre: 'Comedy', 
      year: '2012', 
      director: 'Sajid Khan', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Housefull 3', 
      genre: 'Comedy', 
      year: '2016', 
      director: 'Farhad Samji', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Housefull 4', 
      genre: 'Comedy', 
      year: '2019', 
      director: 'Farhad Samji', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Rowdy Rathore', 
      genre: 'Action-Comedy', 
      year: '2012', 
      director: 'Prabhu Deva', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Khiladi 786', 
      genre: 'Action-Comedy', 
      year: '2012', 
      director: 'Ashish R. Mohan', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Special 26', 
      genre: 'Crime-Drama', 
      year: '2013', 
      director: 'Neeraj Pandey', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Rustom', 
      genre: 'Crime-Drama', 
      year: '2016', 
      director: 'Tinu Suresh Desai', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Pad Man', 
      genre: 'Biographical-Drama', 
      year: '2018', 
      director: 'R. Balki', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Gold', 
      genre: 'Historical-Sports', 
      year: '2018', 
      director: 'Reema Kagti', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: 'Good Newwz', 
      genre: 'Comedy-Drama', 
      year: '2019', 
      director: 'Raj Mehta', 
      leadActor: 'Akshay Kumar' 
    },
    { 
      title: '2.0', 
      genre: 'Sci-Fi-Action', 
      year: '2018', 
      director: 'S. Shankar', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Kabali', 
      genre: 'Action-Drama', 
      year: '2016', 
      director: 'Pa. Ranjith', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Lingaa', 
      genre: 'Action-Drama', 
      year: '2014', 
      director: 'K. S. Ravikumar', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Kaala', 
      genre: 'Action-Drama', 
      year: '2018', 
      director: 'Pa. Ranjith', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Petta', 
      genre: 'Action-Drama', 
      year: '2019', 
      director: 'Karthik Subbaraj', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Kochadaiiyaan', 
      genre: 'Animation-Action', 
      year: '2014', 
      director: 'Soundarya Rajinikanth', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Sivaji', 
      genre: 'Action-Drama', 
      year: '2007', 
      director: 'S. Shankar', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Enthiran', 
      genre: 'Sci-Fi-Action', 
      year: '2010', 
      director: 'S. Shankar', 
      leadActor: 'Rajinikanth' 
    },
    { 
      title: 'Theeran Adhigaaram Ondru', 
      genre: 'Action-Thriller', 
      year: '2017', 
      director: 'H. Vinoth', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Kaithi', 
      genre: 'Action-Thriller', 
      year: '2019', 
      director: 'Lokesh Kanagaraj', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Sulthan', 
      genre: 'Action-Drama', 
      year: '2021', 
      director: 'Bakkiyaraj Kannan', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Madras', 
      genre: 'Action-Drama', 
      year: '2014', 
      director: 'Pa. Ranjith', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Kadaikutty Singam', 
      genre: 'Family-Drama', 
      year: '2018', 
      director: 'Pandiraj', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Thambi', 
      genre: 'Action-Drama', 
      year: '2019', 
      director: 'Jeethu Joseph', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Paiyaa', 
      genre: 'Romance-Action', 
      year: '2010', 
      director: 'N. Lingusamy', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Naan Mahaan Alla', 
      genre: 'Action-Crime', 
      year: '2010', 
      director: 'Suseenthiran', 
      leadActor: 'Karthi' 
    },
    { 
      title: 'Mankatha', 
      genre: 'Action-Thriller', 
      year: '2011', 
      director: 'Venkat Prabhu', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Veeram', 
      genre: 'Action-Drama', 
      year: '2014', 
      director: 'Siva', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Viswasam', 
      genre: 'Action-Drama', 
      year: '2019', 
      director: 'Siva', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Billa', 
      genre: 'Action-Thriller', 
      year: '2007', 
      director: 'Vishnuvardhan', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Mankatha', 
      genre: 'Action-Thriller', 
      year: '2011', 
      director: 'Venkat Prabhu', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Yennai Arindhaal', 
      genre: 'Action-Drama', 
      year: '2015', 
      director: 'Gautham Menon', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Vedalam', 
      genre: 'Action-Drama', 
      year: '2015', 
      director: 'Siva', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Vivegam', 
      genre: 'Action-Thriller', 
      year: '2017', 
      director: 'Siva', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Viswasam', 
      genre: 'Action-Drama', 
      year: '2019', 
      director: 'Siva', 
      leadActor: 'Ajith Kumar' 
    },
    { 
      title: 'Kadaram Kondan', 
      genre: 'Action-Thriller', 
      year: '2019', 
      director: 'Rajesh M. Selva', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Iru Mugan', 
      genre: 'Sci-Fi-Thriller', 
      year: '2016', 
      director: 'Anand Shankar', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Anniyan', 
      genre: 'Psychological-Thriller', 
      year: '2005', 
      director: 'S. Shankar', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Saamy', 
      genre: 'Action-Drama', 
      year: '2003', 
      director: 'Hari', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'I', 
      genre: 'Action-Thriller', 
      year: '2015', 
      director: 'S. Shankar', 
      leadActor: 'Vikram' 
    },
    { 
      title: '10 Endrathukulla', 
      genre: 'Action-Thriller', 
      year: '2015', 
      director: 'Vijay Milton', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Raavanan', 
      genre: 'Drama-Thriller', 
      year: '2010', 
      director: 'Mani Ratnam', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Sethu', 
      genre: 'Drama-Romance', 
      year: '1999', 
      director: 'Bala', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Deiva Thirumagal', 
      genre: 'Drama', 
      year: '2011', 
      director: 'A. L. Vijay', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Irumugan', 
      genre: 'Sci-Fi-Thriller', 
      year: '2016', 
      director: 'Anand Shankar', 
      leadActor: 'Vikram' 
    },
    { 
      title: 'Kadaram Kondan', 
      genre: 'Action-Thriller', 
      year: '2019', 
      director: 'Rajesh M. Selva', 
      leadActor: 'Vikram' 
    },*/
  ];
  

// Function to filter movies 
function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value.toLowerCase();
  const selectedYear = yearFilter.value;

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(searchText) || movie.director.toLowerCase().includes(searchText) || movie.leadActor.toLowerCase().includes(searchText);
    const genreMatch = selectedGenre === '' || movie.genre.toLowerCase().includes(selectedGenre);
    const yearMatch = selectedYear === '' || movie.year === selectedYear;
    return titleMatch && genreMatch && yearMatch;
  });

  displayMovies(filteredMovies);
}

function printdata(movies){
    movies.forEach(movie =>{
        console.log(movie.genre);
    })
};
printdata(movies);

function displayMovies(filteredMovies) {
  movieList.innerHTML = '';

  filteredMovies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${movie.backgroundImage})`;
    card.style.backgroundSize = 'cover';
    
    card.innerHTML = `
    <div class="card-content">
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Lead Actor: ${movie.leadActor}</p>
    </div>
`;
    movieList.appendChild(card);
  });
}

displayMovies(movies);

// Event listeners for filters
searchInput.addEventListener('input', filterMovies);
genreFilter.addEventListener('change', filterMovies);
yearFilter.addEventListener('change', filterMovies);
