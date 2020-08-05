import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { Summary } from './Summary'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)
summary.buildAndPrintReport(matchReader.matches)

const summary2 = Summary.winsAnalysiswithHtmlReport('Man United')