const si = require('systeminformation');

si.processes().then(({all, list}) => {
    let topTenMostCPUConsumingProcessInfo = list.sort((process1, process2) => process2.pcpu - process1.pcpu).slice(1, 10).map(processInfo => {
      return {processName: processInfo.name, cpuUsage: processInfo.pcpu, totalMemoryUsage: processInfo.pmem, RAMUsage: processInfo.mem_rss}
    });
    console.log({numberOfProcesses: all, topTenMostCPUConsumingProcessInfo: topTenMostCPUConsumingProcessInfo});
  })
  .catch(error => console.error(error))

