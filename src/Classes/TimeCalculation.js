export function calculateTime(date) {
    const now = new Date();
    let diff = date - now;

    if (diff <= 0) {
        return null;
    }

    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    diff -= weeks * (1000 * 60 * 60 * 24 * 7);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    let formatted_time = "";

    if (weeks > 0) {
        formatted_time += `${weeks} semaine${weeks > 1 ? 's' : ''}`;
        if (days > 0) {
            formatted_time += ` et ${days} jour${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            formatted_time += ` et ${hours} heure${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            formatted_time += ` et ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else if (seconds > 0) {
            formatted_time += ` et ${seconds} seconde${seconds > 1 ? 's' : ''}`;
        }
    } else if (days > 0) {
        formatted_time += `${days} jour${days > 1 ? 's' : ''}`;
        if (hours > 0) {
            formatted_time += ` et ${hours} heure${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            formatted_time += ` et ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else if (seconds > 0) {
            formatted_time += ` et ${seconds} seconde${seconds > 1 ? 's' : ''}`;
        }
    } else if (hours > 0) {
        formatted_time += `${hours} heure${hours > 1 ? 's' : ''}`;
        if (minutes > 0) {
            formatted_time += ` et ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else if (seconds > 0) {
            formatted_time += ` et ${seconds} seconde${seconds > 1 ? 's' : ''}`;
        }
    } else if (minutes > 0) {
        formatted_time += `${minutes} minute${minutes > 1 ? 's' : ''}`;
        if (seconds > 0) {
            formatted_time += ` et ${seconds} seconde${seconds > 1 ? 's' : ''}`;
        }
    } else {
        formatted_time += `${seconds} seconde${seconds > 1 ? 's' : ''}`;
    }

    return formatted_time;
}