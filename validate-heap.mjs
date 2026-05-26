import heap from './src/data/heap.js'

const problems = []

heap.forEach((item, idx) => {
  const id = item.id ?? idx
  const q = item.question || {}

  if (!item.options || typeof item.options !== 'object') problems.push(`${id}: missing or invalid top-level options`)
  if (!item.answer) problems.push(`${id}: missing top-level answer`)

  if (q.operations !== undefined && !Array.isArray(q.operations)) problems.push(`${id}: question.operations is not an array`)
  if (q.sequence !== undefined && !Array.isArray(q.sequence)) problems.push(`${id}: question.sequence is not an array`)
  if (q.insertions !== undefined && !Array.isArray(q.insertions)) problems.push(`${id}: question.insertions is not an array`)
  if (q.deletions !== undefined && !Array.isArray(q.deletions)) problems.push(`${id}: question.deletions is not an array`)
  if (q.statements !== undefined && !Array.isArray(q.statements)) problems.push(`${id}: question.statements is not an array`)
})

if (problems.length) {
  console.log('FOUND ISSUES:')
  problems.forEach(p => console.log('- ' + p))
  process.exit(1)
}

console.log('No problems found in heap data')
