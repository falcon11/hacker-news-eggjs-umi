import moment from 'moment';

const relativeTime = (time: number) => moment(new Date(time * 1000)).fromNow();

export { relativeTime };
