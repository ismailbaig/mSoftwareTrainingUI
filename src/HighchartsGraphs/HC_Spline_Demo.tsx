import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function HC_Spline_Demo() {

    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };


    return (
        <>
            <div>I am high chart SPLINE Demo</div>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <hr />
        </>
    );
}

export default HC_Spline_Demo;