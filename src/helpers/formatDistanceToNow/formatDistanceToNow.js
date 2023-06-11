import { formatDistanceToNow } from 'date-fns';
function createDistance(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}
export default createDistance;
